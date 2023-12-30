type Statusprops = {
  status: "loading" | "success" | "error";
};
function AdvencedProps({ status }: Statusprops) {
   let message
   if(status === "loading"){
    message = "Loading..."
   }else if (status === "success"){
    message = "Data Fetch success"

   } else if (status === "error") {
    message = "error fetching data"
   }

  
    return (
    <div>
      {message}
    </div>
  );
}

export default AdvencedProps;
