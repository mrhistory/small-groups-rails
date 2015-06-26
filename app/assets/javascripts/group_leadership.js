var GroupLeadership = (function($) {
    var gl = {};

    gl.delete = function(id, cb) {
        $.ajax(
            url: window.links.groupLeadership + '/' + id,
            method: 'DELETE',
            error: function(request, status, error) { cb(false, error); },
            success: function(data, status, request) { cb(true, data); }
        );
    };

    return gl;
}(jQuery));