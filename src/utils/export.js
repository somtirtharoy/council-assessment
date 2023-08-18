


function exportToDoc(element, filename = ''){
    var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";

    var footer = "</body></html>";

    var html = header+document.getElementById(element).innerHTML+footer;

    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
    
    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    // Specify file name
    filename = filename?filename+'.docx':'document.docx';
    
    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    // if(navigator.msSaveOrOpenBlob ){
    //     navigator.msSaveOrOpenBlob(blob, filename);
    // }else{
    // Create a link to the file
    downloadLink.href = url;
    
    // Setting the file name
    downloadLink.download = filename;
    
    //triggering the function
    downloadLink.click();
    // }
    
    document.body.removeChild(downloadLink);
}

function exportAssessmentToDoc(element, filename){
   console.log("Export in process"); 

   const radio_element = document.querySelectorAll('.subject_matter_radio_group_1, .yes');
   if(radio_element[1].checked) {
    // var header_row = document.querySelectorAll('.subject_matter_radio_group_1')[0].parentNode; 
    // //
    // var text = document.createTextNode("This is my caption.");
    // var parentNode = document.querySelectorAll('.subject_matter_radio_group_1')[0].parentNode;
    // console.log(parentNode);
    // parentNode.parentNode.insertBefore(text, parentNode.nextSibling);
    }
}

export {exportToDoc, exportAssessmentToDoc};