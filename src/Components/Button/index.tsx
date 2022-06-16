import {useState} from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({children}: ButtonProps) {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      <button onClick={() => setShowMessage(!showMessage)}>{children}</button>
      {showMessage && <span>Eu cliquei</span>}
    </>
  );
}
