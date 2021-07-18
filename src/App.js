import logo from './logo.svg';
import './App.css';
import { useCallback, useState, useMemo } from 'react';
import { ChildArea } from './ChildArea';
import { InlineStyle } from './components/inlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';

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
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}

export default App;
