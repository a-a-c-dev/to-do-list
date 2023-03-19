
import React,{useState,ReactNode } from 'react'
import  ReactDOM from 'react-dom';


interface ToggleContentProps {
  toggle: (show: () => void) => ReactNode;
  content: (hide: () => void) => ReactNode;
}

const ToggleContent = React.memo(({ toggle, content }:ToggleContentProps) => {
    const [isShown, setIsShown] = useState(false);
    const hide = () => setIsShown(false);
    const show = () => setIsShown(true);
    return (
      <>
        {toggle(show)}
        {isShown && content(hide)}
      </>
    );
  })
  
  export const Modal = ({ children }:{children: ReactNode}) => (
    ReactDOM.createPortal(
      <div className="modal-overlay">
        <div className="modal">
          {children}
        </div>
      </div>
      ,
      document.getElementById('modal-root') as HTMLElement
    )
  );



export default ToggleContent;
