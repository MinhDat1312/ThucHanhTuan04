import TravelApp from './travel_app/TravelApp';
import { TravelProvider } from './travel_app/TravelContext';

function App() {
    return (
        <TravelProvider>
            <TravelApp />
        </TravelProvider>
    );
}

export default App;
