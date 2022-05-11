
let dark = document.querySelector('.dark')
let navbar = document.querySelector('navbar')

dark.addEventListener('click', function darkness() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (navbar.contains('navbar-light', 'bg-light')) {
        navbar.classList.remove('navbar-light', 'bg-light')
        navbar.classList.add('navbar-dark', 'bg-dark')
    }
  })


// $('.switch').click(()=>{
//     $([".light [class*='-light']", ".dark [class*='-dark']"]).each((i,ele)=>{
//         $(ele).toggleClass('bg-light bg-dark')
//         $(ele).toggleClass('text-light text-dark')
//         $(ele).toggleClass('navbar-light navbar-dark')
//     })
//     // toggle body class selector
//     $('body').toggleClass('light dark')
// })