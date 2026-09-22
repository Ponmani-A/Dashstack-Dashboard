# DashStack Dashboard

Ithu unga screenshot ku match aaguravaru banachu React + Vite + Tailwind code.

## Run pandra maadhiri (steps)

1. Terminal la project folder ku po
2. Packages install pannu:
   ```
   npm install
   ```
3. Server start pannu:
   ```
   npm run dev
   ```
4. Browser la `http://localhost:5173` open pannu → Dashboard varum
5. `http://localhost:5173/dashboard2` po na → Dashboard2 varum

## Folder structure (enga enna irukku)

```
src/
  components/
    Sidebar.jsx      -> left side menu (reusable - ella pages layum use pannalam)
    Navbar.jsx        -> top bar - search, bell, profile
    StatCard.jsx      -> mela 4 card (Total User, Total Order, etc.)
    SalesChart.jsx    -> "Sales Details" area chart
    DealsTable.jsx    -> "Deals Details" table
  pages/
    Dashboard.jsx     -> unga screenshot page
    Dashboard2.jsx     -> example - same components, vera data
  App.jsx             -> routing (evvalo pages iruku nu decide pannurathu)
```

## Neenga puriyanum na, indha order la padi

1. `StatCard.jsx` mudhalla paaru - ithu simple, oru card design mattum.
2. `Dashboard.jsx` la `stats` array paaru - andha array data ah `StatCard` ku pass pannurom.
3. Adhu ponaa, `Sidebar.jsx`, `Navbar.jsx` paaru.
4. Last la `SalesChart.jsx` (chart library use panrom - recharts).

## Puthu page (Dashboard3 mathiri) add pannanum na

1. `src/pages/` la puthu file create pannu, example: `Dashboard3.jsx`
2. `Dashboard2.jsx` file ah copy paste pannu, adhula data mattum maathu
3. `App.jsx` la oru line add pannu:
   ```jsx
   <Route path="/dashboard3" element={<Dashboard3 />} />
   ```

Ivlo thaan. Same Sidebar, Navbar, StatCard, SalesChart, DealsTable - ellame reuse aagum,
so onnu edit pannina maathram, ella pages layum update aagum (adhu than "maintain pannurathu"
nu solringale, adhukku indha structure).

## Note

- `SalesChart.jsx` and `DealsTable.jsx` la irukura data - sample data (hardcoded). Real app la,
  API call pannitu andha data ah pass pannunga.
- Icons ku `lucide-react` use pannirukom (already install pannirukom package.json la).
- Chart ku `recharts` use pannirukom.
