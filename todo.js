const todoList = {
    inputValue: '',
    list: [],
    handleInputChange(event){
        this.inputValue = event.target.value
    },
    addToList(){
        this.list.push(this.inputValue)
        this.inputValue = ''
        document.querySelector('.myinp').value = this.inputValue
        this.createListItem()
    },
    createListItem() {
        document.querySelector('.mylistdiv').innerHTML = ''
        this.list.forEach((element) => {
            let listItem = document.createElement('div')
            listItem.innerText = element
            document.querySelector('.mylistdiv').appendChild(listItem)
        })   
    }
}