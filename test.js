function createNewTask(text) {
     //아이템 틀
     const listItem = document.createElement('div');
     // document는 정의되어 있는 상수
     listItem.className = 'todo-item';

     //할일 텍스트
     const textItem = document.createElement('span');
     textItem.innerText = text;
     listItem.appendChild(textItem);

     //완료 버튼
     const doneButton = document.createElement('span');
     doneButton.className = 'action action-done';
     doneButton.innerText = '완료';
     listItem.appendChild(doneButton);

     //삭제 버튼
     const deleteButton = document.createElement('span');
     deleteButton.className = 'action action-delete';
     deleteButton.innerText = '삭제';
     listItem.appendChild(deleteButton);

     return listItem;
}

function createDonetask(text) {
     //아이템 틀
     const listItem = document.createElement('div');
     // document는 정의되어 있는 상수
     listItem.className = 'todo-item todo-done';

     //할일 텍스트
     const textItem = document.createElement('span');
     textItem.innerText = text;
     listItem.appendChild(textItem);

     //삭제 버튼
     const deleteButton = document.createElement('span');
     deleteButton.className = 'action action-delete';
     deleteButton.innerText = '삭제';
     listItem.appendChild(deleteButton);

     return listItem;
}

function deleteTask(btnEl, isDone) {
     if(isDone == 1) {
          $('#done-list').append(createDonetask(btnEl.parentNode.children[0].innerText));
     }

     const listItem = btnEl.parentNode;
     listItem.parentNode.removeChild(listItem);
}

$('#button-add').click(function() {
     const newText = $('#todo-input').val();
     //왠만하면 값이 변하지 않으면 const 사용하기!(암묵적)
     //alert(newText);
     $('#todo-list').append(createNewTask(newText));
     $("#todo-input").val('');
     bindEvent();
});
//#이 머쥐

function bindEvent() {
     const delBtns = $('.action-delete');
     const donBtns = $('.action-done');
     for(let i = 0; i < delBtns.length; i++) {
          delBtns[i].onclick = function() {
          deleteTask(delBtns[i], 0);
          }
     }

     for(let i = 0; i < donBtns.length; i++) {
          donBtns[i].onclick = function() {
          deleteTask(this, 1);
          }
     }
}
bindEvent();