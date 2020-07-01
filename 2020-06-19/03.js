let template = `
  <ul>
    <% for (let i = 0; i < data.supplies.length; i++) { %>
      <li><%= data.supplies[i] %></li>
    <% } %>
  </ul>
`

