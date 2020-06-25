import { AppContext } from "../../components/AppContext";
import React, { useContext } from "react";
import "../../App.css";

const ListItem = ({ person, styleProp }) => {
  const context = useContext(AppContext);
  // const [tempClass, setTempClass] = useState(
  //   context.theme[context.state.theme].background1
  // );
  // useEffect(() => {
  //   setTempClass(context.theme[context.state.theme].background1);
  //   setTimeout(() => {
  //     setTempClass(context.theme[context.state.theme].background2);
  //   }, 1000);
  //   return () => {
  //     setTimeout(() => {
  //       setTempClass(context.theme[context.state.theme].background1);
  //     }, 4000);
  //   };
  // }, []);
  return (
    <div
      className={"data-item "}
      style={{
        background: context.theme[context.state.theme].background2,
      }}>
      <div>
        <h3
          style={{
            color: context.theme[context.state.theme].h1,
          }}>
          Name:
        </h3>
        <p>
          {person.firstName}, {person.lastName}
        </p>
      </div>
      <div>
        <h3
          style={{
            color: context.theme[context.state.theme].h1,
          }}>
          Priority:
        </h3>
        <p>{person.priority ? person.priority : undefined} </p>
      </div>
    </div>
  );
};

export { ListItem as default };
