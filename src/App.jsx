import './App.css';
import Title from '/src/components/Title/Title';
import ModeSwitcher from '/src/components/ModeSwitcher/ModeSwitcher';
import Tabs from '/src/components/Tabs/Tabs';

function App() {
  return (
    <>
      <header>
        <Title /> 
      </header>
      <main>
        <Tabs />
        <ModeSwitcher />
      </main>
    </>
  );
}

export default App;
