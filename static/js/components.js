Vue.component('skills-list', {
  props: {
    lang: String,
    items: Array
  },
  template: `
    <table>
      <tbody>
        <tr v-for="item in items">
          <td v-text="item.name"></td>
          <td><div :id="lang+item.id"></div></td>
        </tr>
      </tbody>
    </table>
  `
})