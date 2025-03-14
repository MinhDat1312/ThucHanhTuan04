import TravelApp from './travel_app/TravelApp';
import UserApp from './manage_user/UserApp';
import { TravelProvider } from './travel_app/TravelContext';
import { UserProvider } from './manage_user/UserConText';

function App() {
    return (
        // <UserProvider>
        //     <UserApp />
        // </UserProvider>
        <TravelProvider>
            <TravelApp />
        </TravelProvider>
    );
}

export default App;
