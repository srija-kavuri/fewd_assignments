
// import { Link } from 'react-router-dom';

// export default function Header() {
//   return (
//     <header>
//       <nav>
//         <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
