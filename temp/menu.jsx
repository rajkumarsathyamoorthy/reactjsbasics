import React from 'react';


export default class Menur extends React.Component{
  render(){
    return(
    <Menu className='myMenu'>
      <MenuTrigger>
        ⚙
      </MenuTrigger>
      <MenuOptions>

        <MenuOption>
          1st Option
        </MenuOption>

        <MenuOption onSelect={this.someHandler}>
          2nd Option
        </MenuOption>

        <div className='a-non-interactive-menu-item'>
          non-selectable item
        </div>

        <MenuOption disabled={true} onDisabledSelect={this.otherHanlder}>
          disabled option
        </MenuOption>

      </MenuOptions>
    </Menu>
    );
  }
}
