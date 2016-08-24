var vm = new Vue({
  el: "#fullpage",
  data: {
    python: pythonSkills,
    pythonPrefix: 'py',
    js: jsSkills,
    jsPrefix: 'js',
    db: dbSkills,
    dbPrefix: 'db',
    other: otherSkills,
    otherPrefix: 'other'
  }
})
$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Homepage', 'Skills', 'Interests', 'Contact']
  });
});