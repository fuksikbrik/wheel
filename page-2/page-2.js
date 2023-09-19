let tab = function () {
    let tabNav = document.querySelectorAll('.accordeon-item'),
        tabContent = document.querySelectorAll('.accordeon-title'),
        tabName;
        
        tabNav.forEach(item => {
            item.addEventListener('click', selectTabNav)
        });

        function selectTabNav() {
            tabNav.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
        }

        function selectTabContent(tabName) {
            tabContent.forEach(item => {
                item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
            })
            
        }
}
tab();

const next = document.querySelector('.next')
let accordeonItemActive = document.querySelectorAll('.accordeon-item')
    const info = []
next.addEventListener('click', function () {
    accordeonItemActive.forEach( (item)=> {
        if( item.classList.contains('active')){
            let imageProfile = item.getAttribute('src');
            info.push(imageProfile)
            console.log(info)
        }
    })
    let nameSurname = document.querySelector('.name-surname').value
    let email = document.querySelector('.email').value
    info.push(nameSurname, email)

});
