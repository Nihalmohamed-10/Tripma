import React from "react";
import './PriceGrid.css'
import { priceGrid } from "../Cards/CardsData";

function PriceGrid() {
    return (
      <div className="gridMain">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>2/12</th>
              <th>2/13</th>
              <th>2/14</th>
              <th>2/15</th>
              <th>2/16</th>
            </tr>
          </thead>
          <tbody>
            {priceGrid.map((row) => (
              <tr key={row.id}>
                <td>{row.th}</td>
                <td>{row.tr1}</td>
                <td>{row.tr2}</td>
                <td>{row.tr3}</td>
                <td>{row.tr4}</td>
                <td>{row.tr5}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default PriceGrid;
// function PriceGrid() {
//   return (
//     <div className="gridMain">
        
//     <table>
//       <thead>
//         <tr>
//           <th></th>
//           <th>2</th>
//           <th>3</th>
//           <th>4</th>
//           <th>5</th>
//           <th>6</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1, 1</td>
//           <td>1, 2</td>
//           <td>1, 3</td>
//           <td>1, 4</td>
//           <td>1, 5</td>
//           <td>1, 6</td>
//         </tr>
//         <tr>
//           <td>2, 1</td>
//           <td>2, 2</td>
//           <td>2, 3</td>
//           <td>2, 4</td>
//           <td>2, 5</td>
//           <td>2, 6</td>
//         </tr>
//         <tr>
//           <td>3, 1</td>
//           <td>3, 2</td>
//           <td>3, 3</td>
//           <td>3, 4</td>
//           <td>3, 5</td>
//           <td>3, 6</td>
//         </tr>
//         <tr>
//           <td>4, 1</td>
//           <td>4, 2</td>
//           <td>4, 3</td>
//           <td>4, 4</td>
//           <td>4, 5</td>
//           <td>4, 6</td>
//         </tr>
//         <tr>
//           <td>5, 1</td>
//           <td>5, 2</td>
//           <td>5, 3</td>
//           <td>5, 4</td>
//           <td>5, 5</td>
//           <td>5, 6</td>
//         </tr>
//         <tr>
//           <td>6, 1</td>
//           <td>6, 2</td>
//           <td>6, 3</td>
//           <td>6, 4</td>
//           <td>6, 5</td>
//           <td>6, 6</td>
//         </tr>
//       </tbody>
//     </table>
//     </div>
//   );
// }

// export default PriceGrid;
{/* <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
        <div class="grid-item">10</div>
        <div class="grid-item">11</div>
        <div class="grid-item">12</div>
        <div class="grid-item">13</div>
        <div class="grid-item">14</div>
        <div class="grid-item">15</div>
        <div class="grid-item">16</div>
        <div class="grid-item">17</div>
        <div class="grid-item">18</div>
        <div class="grid-item">19</div>
        <div class="grid-item">20</div>
        <div class="grid-item">21</div>
        <div class="grid-item">22</div>
        <div class="grid-item">23</div>
        <div class="grid-item">24</div>
        <div class="grid-item">25</div>
        <div class="grid-item">26</div>
        <div class="grid-item">27</div>
        <div class="grid-item">28</div>
        <div class="grid-item">29</div>
        <div class="grid-item">30</div>
        <div class="grid-item">31</div>
        <div class="grid-item">32</div>
        <div class="grid-item">33</div>
        <div class="grid-item">34</div>
        <div class="grid-item">35</div>
        <div class="grid-item">36</div>
      </div> */}