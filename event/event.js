function createEvent(){
    var event_img=document.createElement("img")
    event_img.setAttribute("src","https://cdn.siasat.com/wp-content/uploads/2019/11/events-in-hyderabad.jpg")
    var event_info=document.createElement("div")
    event_info.setAttribute("class","info")
    event_info.innerHTML=`
    <div class="name"><label for="name">Name:</label><input type="text" id="name" class="name_input"></div>
    <div class="email"><label for="email">Email:</label><input type="email" id="email" class="email_input"></div>
    <div class="num"><label for="num">Phone.no:</label><input type="number" id="num" class="num_input"></div>
    <div class="seats">
        <label for="seats">Number of seats:</label>
        <select id="seats">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="23">23</option>
        </select>
    </div>
    <div class="nameOfattendee"><label for="nameOfattendee">Name Of Attendee </label><input type="text" id="nameOfattende"></div>
    <div class="last">
        <div class="submit"><input type="submit" id="submit"></div>
        <div class="cancel"><input type="submit" id="cancel" value="Cancel"></div> 
    </div>

    `
    document.body.append(event_img,event_info)
}
createEvent()