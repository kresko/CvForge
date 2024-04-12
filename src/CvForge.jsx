import './CvForge.css'
import './Components/Organism/CvForgeForm/CvForgeForm';
import CvForgeForm from './Components/Organism/CvForgeForm/CvForgeForm';
import CvForgeRenderer from './Components/Organism/CvForgeRenderer/CvForgeRenderer';

function CvForge() {

  return (
    <>
      <CvForgeForm />
      <CvForgeRenderer />
    </>
  )
}

export default CvForge
