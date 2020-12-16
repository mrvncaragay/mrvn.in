import { useStateValue } from './context';

function App() {
	const [{ darkMode }] = useStateValue();

	return <div style={{ backgroundColor: darkMode }}>Initialized mrvn.in</div>;
}

export default App;
