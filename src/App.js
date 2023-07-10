import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Amir Iqbal</p>
				<a
					className="App-link"
					href="https://www.instagram.com/raoamir216/"
					target="_blank"
					rel="noopener noreferrer">
					Amir Instagram
				</a>
			</header>
		</div>
	);
}

export default App;
