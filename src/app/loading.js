import {Spinner} from "@nextui-org/react";

const loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner label="Loading..." color="primary" size="lg"/>
    </div>
  )
}

export default loading
