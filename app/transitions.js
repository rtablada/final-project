export default function(){
  this.transition(
    this.fromRoute('users.index'),
    this.toRoute('users.menus.menu'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
