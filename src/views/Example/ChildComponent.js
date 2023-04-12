import { render } from "@testing-library/react";
import React from "react";
// class ChildComponent extends React.Component {
//   state = {
//     firstName: "",
//     lastName: "",
//   };
//   handleChangFirtName = (e) => {
//     this.setState({
//       firstName: e.target.value,
//     });
//   };
//   handleChangLastName = (e) => {
//     this.setState({
//       lastName: e.target.value,
//     });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("check data input: ", this.state);
//   };

//   render() {
//     console.log("check props: ", this.props);
//     let { name, age, arrJobs } = this.props;
//     return (
//       <>
//         <div className="job-lists">
//           {arrJobs.map((item, index) => {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}
//               </div>
//             );
//           })}
//         </div>
//       </>
//     );
//   }
// }

const ChildComponent = (props) => {
  let { name, age, arrJobs } = props;
  return (
    <>
      <div className="job-lists">
        {arrJobs.map((item, index) => {
          return (
            <div key={item.id}>
              {item.title} - {item.salary}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ChildComponent;
