import logo from './logo.svg';
import './App.css';
import { useCallback, useState, useMemo } from 'react';
import { ChildArea } from './ChildArea';
import { InlineStyle } from './components/inlineStyle';

function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => setText(e.target.value);
  
  const onClickOpen = (e) => setOpen(!open)

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp)

  return (
    <div className="App">
      <InlineStyle />
    </div>
  );
}

export default App;
