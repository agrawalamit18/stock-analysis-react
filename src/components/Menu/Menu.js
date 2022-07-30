import  '../../css/menu.css'

function Menu () {
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <>
            <div className="topnav" id="myTopnav">
                <a href="#home" className="active">Home</a>
                <div className="dropdown">
                    <button className="dropbtn">Stock 
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                    <a href="#">Stock Analysis</a>
                    <a href="#">Stock Screen</a>
                    </div>
                </div> 
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" className="icon" onClick={myFunction}>&#9776;</a>
            </div>
            <div>
                <h2>Welcome to stock Analysis</h2>
            </div>
        </>
    );
}
export default Menu;