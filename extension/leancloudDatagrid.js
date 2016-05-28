var cardview = $.extend({}, $.fn.datagrid.defaults.view, {
    renderRow: function(target, fields, frozen, rowIndex, rowData){
        var cc = [];
        cc.push('<td colspan=' + fields.length + ' style="padding:10px 5px;border:0;">');
        if (!frozen){
            //var aa = rowData.itemid;
            //var img = 'shirt' + aa[1] + '.gif';
            //cc.push('<img src="images/' + img + '" style="width:150px;float:left">');
            cc.push('<div style="float:left;margin-left:20px;">');
            for(var i=0; i<fields.length; i++){
                var copts = $(target).datagrid('getColumnOption', fields[i]);
                cc.push('<p><span class="c-label">' + copts.title + ':</span> ' + rowData[fields[i]] + '</p>');
            }
            cc.push('</div>');
        }
        cc.push('</td>');
        return cc.join('');
    }
});


var leancloudA = $.extend({}, $.fn.datagrid.defaults.view, {
    onAfterRender:function(target){
        console.log("onAfterRender");
    },
    onBeforeRender:function(target, rows){
        console.log("onBeforeRender");
    },
    render:function(target,container, frozen){
        console.log("render");
    }
});

var leancloudB = $.extend({}, $.fn.datagrid.defaults.view, {
    renderRow: function(target, fields, frozen, rowIndex, rowData){
        var query = new AV.Query('TODO');
        query.find().then(function(results) {
            console.log('Successfully retrieved ' + results.length + ' posts.');

        }, function(error) {
            console.log('Error: ' + error.code + ' ' + error.message);
        });
    }
});