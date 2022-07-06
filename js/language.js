$('.language-select').each(function () {
    // console.log(this)
    let $this = $(this),
        numberOfOptions = $(this).children('option').length;
    // console.log(numberOfOptions)
    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    let $styledSelect = $this.next('div.select-styled');
    $styledSelect.html(`<i class="flag default-flag"></i>` + $this.children('option').eq(0).text());

    let $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
    for (let i = 0; i < numberOfOptions; i++) {
        $(`<li rel="${$this.children('option').eq(i).val()}"><i class="flag flag-${$this.children('option').eq(i).val()}"></i>${$this.children('option').eq(i).text()}</li>`).appendTo($list);
    }

    let $listItems = $list.children('li');


    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.html(`<i class="flag flag-${$(this).attr('rel')}"></i>` + $(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $(".select-styled i").removeClass('default-flag');
        $list.hide();
        // console.log($this.val());
    });

    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});