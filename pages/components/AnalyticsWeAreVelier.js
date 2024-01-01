import { useEffect, useState, createContext, useContext } from 'react';
import { firestore } from '../../firebase/client';

export const TotalViewsContext = createContext();

export const useTotalViews = () => {
  return useContext(TotalViewsContext);
};

export const AnalyticsWeAreVelier = ({ children }) => {
  const [totalViews, setTotalViews] = useState(0);
  const [countViews, setCountViews] = useState({});
  const [lastVisitTime, setLastVisitTime] = useState(null);

  const vID = "Zf5dYKIsb3YqmdIe58mK";

  useEffect(() => {
    const incrementTotalViews = async () => {
      try {
        if (vID) {
          const now = new Date();
          const currentDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/Chicago' })).toISOString().split('T')[0];
          
          // Obtener la última visita del usuario desde el localStorage
          const lastVisit = localStorage.getItem('lastVisit');
          
          // Verificar si ha pasado al menos 10 minutos desde la última visita
          if (!lastVisit || (now - new Date(lastVisit)) > 60 * 60 * 1000) {
            // Documento para vistas totales
            const totalViewsRef = firestore.collection('vMember').doc(vID).collection('analytics').doc('totalViews');
            const totalDoc = await totalViewsRef.get();
  
            if (totalDoc.exists) {
              const currentTotalViews = totalDoc.data().count || 0;
              setTotalViews(currentTotalViews);
              await totalViewsRef.update({ count: currentTotalViews + 1 });
            } else {
              await totalViewsRef.set({ count: 1 });
              setTotalViews(1);
            }
  
            // Documento para vistas diarias
            const countViewsRef = firestore.collection('vMember').doc(vID).collection('analytics').doc('countViews');
            const countViewsDoc = await countViewsRef.get();
  
            if (countViewsDoc.exists) {
              const countViewsData = countViewsDoc.data();
              setCountViews(countViewsData);
  
              // Actualizar las vistas para el día actual
              const currentCountViews = countViewsData[currentDate] || 0;
              await countViewsRef.update({ [currentDate]: currentCountViews + 1 });
            } else {
              // Si el documento no existe, crear uno con la vista inicial para el día actual
              await countViewsRef.set({ [currentDate]: 1 });
              setCountViews({ [currentDate]: 1 });
            }
            
            // Actualizar la última visita en el localStorage
            localStorage.setItem('lastVisit', now.toISOString());
          }
        } else {
          console.log('No se encontró un usuario. No se actualizará el contador de vistas.');
        }
      } catch (error) {
        console.error('Error al actualizar el contador de vistas:', error);
      }
    };

    incrementTotalViews();
  }, []);

  return (
    <TotalViewsContext.Provider value={{ totalViews, countViews }}>
      {children}
    </TotalViewsContext.Provider>
  );
};

export async function getServerSideProps() {
  return {
    props: {}, // Puedes devolver cualquier dato que necesites, pero en este caso no necesitas prerenderizar nada.
  };
}

export default TotalViewsContext;
