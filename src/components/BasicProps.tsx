type User = {
  id: number;
  name: string
}

// type PropsofBasic = {
//   isAdmin: boolean;
//   status: "active" | "inActive";
//   address: {
//     no: number;
//     city: string;
//   };
//   arr: { title: string; id: number; something: { name: string; id: number } }[];
//   arr2 :(string | number) [];
   
// };
// type CombineType = User & PropsofBasic
// function BasicProps({ id, name, isAdmin, status, address , arr , arr2}: CombineType) {
//   return (
//     <div>
//       user id = {id} <br /> username = {name} <br /> user is admin = {isAdmin}{" "}
//       <br />
//       status = {status} <br />
//       address = {address.no} : {address.city}
//      <ul>
//      {
//         arr.map((item) =>(
//           <li key={item.id}> {item.id} {item.title}  {item.something.name}</li>
//         ))

//       }
//      </ul>
//      <ul>
//      {
//         arr2.map((item) =>(
//           <li key={item}> {item}</li>
//         ))

//       }
//      </ul>
//      <button onClick={()=> {console.log("aaaaa")}}> submit </button>
//     </div>
//   );
// }


type PropsofBasic = {
  isAdmin: boolean;
  status: "active" | "inActive";
  address: {
    no: number;
    city: string;
  };
  arr: { title: string; id: number; something: { name: string; id: number } }[];
  arr2 :(string | number) [];
   
};
type CombineType = User & PropsofBasic
function BasicProps(props : CombineType) {
  return (
    <div>
      user id = {props.id} <br /> username = {props.name} <br /> user is admin = {props.isAdmin}{" "}
      <br />
      status = {props.status} <br />
      address = {props.address.no} : {props.address.city}
     <ul>
     {
       props.arr.map((item) =>(
          <li key={item.id}> {item.id} {item.title}  {item.something.name}</li>
        ))

      }
     </ul>
     <ul>
     {
        props.arr2.map((item) =>(
          <li key={item}> {item}</li>
        ))

      }
     </ul>
     <button onClick={()=> {console.log("aaaaa")}}> submit </button>
    </div>
  );
}



export default BasicProps;
