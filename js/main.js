$(document).ready(function(){
    
    // add new item
    $('#add').click(function(){        
        $('#todoList').append('<li><input type="checkbox" class="check" /> <label>Double tap to edit text</label> <span class="options"><i class="fa fa-arrows-alt sort-handle" title="drag to sort"></i> <i class="remove-handle fa fa-minus-square" title="remove item"></i></span></li>');                
    });                       
    
    // save list
    $('#save').click(function(){ 
        // todo: better or cooler modal box for this
        saveConfirm = confirm('Saving this list will overwrite the previous saved list, continue?');
        if (saveConfirm) { 
            $listItems = $('#todoList').html();
            localStorage.setItem("theList", $listItems);    
        }
    });
    
    // reload list
    $('#reload').click(function(){
        // todo: better or cooler modal box for this
        reloadConfirm = confirm('Do you really want to reload previous list?');
        if (reloadConfirm == true) { 
            $('#todoList').html(localStorage.theList);
        }
    });
    
    // clear list
    $('#clear').click(function(){
        // todo: better or cooler modal box for this
        clearConfirm = confirm('Do you really want to clear current list?');
        if (reloadConfirm == true) {
            $('#todoList').html('');
        }        
    })
    
    // sortable list
    $('ul').sortable({ handle: '.sort-handle' });
        
    
    // edit todo
    $(document).on('click', '#todoList li label',function(){
        $(this).attr('contentEditable','true');        
        if ($(this).html() == 'Double tap to edit text') {
            $(this).focus().html('');
        }            
    });
    
    // remove focus on label when enter key is pressed
    $(document).on('keydown','#todoList li label', function(e){
        if(e.keyCode == 13){
            $(this).blur();
        }    
    });

    
    // mark as done
    $(document).on('click','input[type="checkbox"]', function(){
        $(this).parent().find('label').toggleClass('done');
    });
    
    // remove item
    $(document).on('click','#todoList li .remove-handle', function(){
        // todo: better or cooler modal box for this
        removeConfirm = confirm('Do you really want to remove this item?'); 
        if (removeConfirm == true) {
            $(this).parent().parent().fadeOut(function(){
                $(this).remove();
            });                    
        }    
    });    

});