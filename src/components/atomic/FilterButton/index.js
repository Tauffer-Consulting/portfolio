// import React from 'react';
// import { Container, FilterButton } from './style';

// const filterValues = [
//   {
//     label: '',
//     valueName: '',
//   },
//   {
//     label: 'Data Science',
//     valueName: 'datascience',
//   },
//   {
//     label: 'machinelearning',
//     valueName: 'Artificial Intelligence',
//   },
//   {
//     label: 'cloudsolutions',
//     valueName: 'Cloud Solutions',
//   },
//   {
//     label: 'visualization',
//     valueName: 'Visualization',
//   }
// ]

// function FilterButtons({values}) {
//   return (
//     <Container>
//       { values.map((eachFilterValue) => {
//         if (!eachFilterValue.label) {
//           return <FilterButton
//             onClick={() => {
//               filterItem('');
//               setActive('All');
//             }}
//             isActive={active && 'All'}
//           >
//             All
//           <FilterButton/>;
//         }
//         return <FilterButton
//             value={eachFilterValue.valueName}
//             onClick={() => {
//               filterItem(`${eachFilterValue.label}`);
//               setActive(`${eachFilterValue.valueName}`);
//             }}
//             isActive={`active && ${eachFilterValue.valueName}`}
//           >
//             {eachFilterValue.label}
//           </FilterButton>;
//           }
//         )}
//     </Container>
//   );
// }

// export default FilterButtons;