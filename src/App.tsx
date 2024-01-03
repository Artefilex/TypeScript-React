import BasicProps from "./components/BasicProps";
import AdvencedProps from "./components/AdvencedProps";
import Heading from "./components/Heading";
import ClickEvent from "./components/events/ClickEvent";
import { ThemeContextProvider } from "./components/hooks/context/UseContextHook";
import { UserProivder } from "./components/hooks/context/UserContext";
import User from "./components/hooks/context/User";
import Private from "./components/componentTsx/Private";
import Profile from "./components/componentTsx/Profile";
import { List } from "./components/generics/List";
import { RestrictingProps } from "./components/RestrictingProps";
import { Toast } from "./components/TemplateLiteralType";
import { CustomButton } from "./components/html/Button";
import { Text } from "./components/polymorpich/Text";
import UserForm from "./components/form/UserForm";
function App() {

  
  

  return (
    <ThemeContextProvider>
      <UserProivder>
        <BasicProps
          id={12}
          name="aboo"
          status={"active"}
          isAdmin={false}
          address={{ no: 44, city: "Malatya" }}
          arr={[
            { id: 12, something: { id: 1, name: "2222" }, title: "first arr" },
            { id: 13, something: { id: 1, name: "2222" }, title: "second arr" },
            { id: 14, something: { id: 1, name: "2222" }, title: "thirth arr" },
          ]}
          arr2={["aaaa", "baris", "sedef", 12]}
        />
        <AdvencedProps status="loading" />
        <Heading>
          <div>bla bla hello </div>
        </Heading>
        <ClickEvent
          // handleClick={() =>   console.log("bla blaaa")}
          handleClick={(e) => console.log(e.target)}
        />
    
        <User />
        <Private isLogin={true} Component={Profile} />
        <List
          items={["baris", "sedef"]}
          handleClick={(item) => console.log(item)}
        />
        <List
          items={[
            { name: "baris", surname: "tuncdemir" },
            { name: "sedef", surname: "tuncdemir" },
          ]}
          handleClick={(item) => console.log(item)}
        />
        <RestrictingProps value={12} isPositive />
       <Toast position="center"/>
       <CustomButton variant="primary" onClick={() => console.log("click")}>
        Primary Button
        </CustomButton>
        <Text as="h1" size="lg" >  heading</Text>
        <Text as="p" size="md">  paragraph</Text>
        <Text as="label" size="sm">  Label</Text>
        <Text as="a" href="bla bla" size="sm">  a tag </Text>
        <UserForm  />
      </UserProivder>
    </ThemeContextProvider>
  );
   


}

export default App;
