

function ventPaaApp() {
    $.ajaxSetup({ cache: false });
    var delay = 1000;
    var timeout = 90000;
    var started = Date.now();

    if (Date.now() - started < timeout) {
        setTimeout(function(){ sjekkAppStatus(); }, delay);
    }else {
        $('#complete').submit();
    }
}

function sjekkAppStatus() {
    var url = '/edge';
    $.get(url, function(status) {
        console.log("Waiting " + status);
        if (status == 'WAIT') {
            console.log("Waiting " + status);
            ventPaaApp();
        } else {
            console.log(status)
            $('#complete').submit();
        }
    }).fail(function(jqxhr, textStatus, error) {
        $('#complete').submit();
    });
}

function setUpEmitter(sessionId) {
    const eventSource = new EventSource('/appstatusEmitter/' + sessionId);
    eventSource.addEventListener("appStatus", (event) => {
        const payload = JSON.parse(event.data); /* payload is 'FINISHED' or 'REJECTED' */
        if(payload !== "WAIT"){
            $('#complete').submit();
        }
    });

    eventSource.onerror = (event) => {
        switch(event.target.readyState) {
            case EventSource.CLOSED:
                console.log("SSE connection closed.");
                $('#complete').submit();
                break;
            case EventSource.OPEN:
                console.log("SSE connection open.");
                break;
            case EventSource.CONNECTING:
                console.log("SSE connecting.");
                break;
            default:
                console.log("Unknown error: " + event);
               $('#complete').submit();
                break;
        }
        // eventSource.close(); /* prevent auto-reconnect */
    }
}

$(document).ready(function() {
    let eventSourceValue = $("#sessionAttributeHolder").data("eventsourceenabled");
    if (!!window.EventSource && eventSourceValue) {
        let sessionId = $("#sessionAttributeHolder").data("sid");
        setUpEmitter(sessionId);
    } else {
        ventPaaApp();
    }
});