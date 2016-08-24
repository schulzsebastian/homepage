Vue.component('skills-list', {
  props: {
    lang: String,
    items: Array
  },
  template: `
    <table>
      <tbody>
        <tr v-for="item in items">
          <td class="col s6" v-text="item.name"></td>
          <td class="col s6"><div :id="lang+item.id"></div></td>
        </tr>
      </tbody>
    </table>
  `,
  ready: function(){
    var self = this;
    self.items.forEach(function(skill){
      var bar = new ProgressBar.Line('#'+self.lang+skill.id, {
        strokeWidth: 2,
        easing: 'easeInOut',
        duration: 5000,
        color: '#333',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      })
      bar.animate(skill.level)
    })
  }
})