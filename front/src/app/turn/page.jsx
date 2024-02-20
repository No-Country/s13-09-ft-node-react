import { Footer } from "../components/footer";
import { CreateTurn } from "../components/createTurn";
export const metadata = {
    title: 'Crear Turno | HealthMate',
    description: 'Crear Turno',
  };
  
export default function Turn() {
    return <>
        <CreateTurn/>
        <Footer />
    </>
}