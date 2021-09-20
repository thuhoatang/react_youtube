import React from 'react'
import './Body.css'
import image_header from './logo-header.png'
import ghibli_1 from './ghibli_1.jpg'
import ghibli_2 from './ghibli_2.jpg'
import ghibli_3 from './ghibli_3.jpg'
import ghibli_4 from './ghibli_4.jpg'
import user_1 from './user_1.png'

export default function Body() {
   
    return (
        <div className="body_youtube">    

            <div className="menubar_left">
                <div className="btn-group-vertical text-center">
                    <button type="button" class="btn px-3 text-dark py-3 text-center "><i class="fa fa-home" aria-hidden="true"></i><p className="">Home</p></button>
                    <button type="button" class=" btn  text-dark px-3 py-3"><i class="fab fa-hotjar"></i><p>Trending</p></button>
                    <button type="button" class=" btn  text-dark px-3 py-3"><i class="fa fa-window-restore" aria-hidden="true"></i><p>Subsription</p></button>
                    <button type="button" class=" btn  text-dark px-3 py-3"><i class="fas fa-gamepad"></i><p>Play game</p></button>
                </div>
            </div>

            <div className="container">

            <div className="body_youtube">
                <div className="list_button">
                    <div className="container">
                        <div class="row">
                            <span className="btn">Home</span>
                            <span className="btn">Music</span>
                            <span className="btn">Exercise</span>
                            <span className="btn">Cooking show</span>
                            <span className="btn">Math</span>
                            <span className="btn">Travel destinations</span>
                            <span className="btn">Visual arts</span>
                            <span className="btn">Football</span>
                            <span className="btn ">Action adventure game</span>
                            <span className="btn">Visual arts</span>              
                        </div>
                        
                    </div>
                    <div className="row mx-5 my-3"><h5>&#9679; Watched</h5></div>
                    <div className="row recently_row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="card">
                                    <div className="card_img_bg">
                                        <img className="card-img-top" src={ghibli_1} alt="Card image cap"></img>
                                        <div class="overlay">
                                            <div class="text"><a href="https://www.w3schools.com/"><i class="fas fa-play"></i></a></div>
                                        </div>
                                    </div>
                                    
                                    <div className="card-body">
                                        <div className="user_avatar mr-3"><img src={ghibli_4} className="img_avata"></img></div>
                                        
                                        <div className="group_info_user">
                                            <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                            <div className="card-text"><a href="#">Thuhoa</a></div>
                                            <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                        </div>                                      
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="card">
                                    <div className="card_img_bg">
                                                <img className="card-img-top" src={ghibli_3} alt="Card image cap"></img>
                                                <div class="overlay">
                                                    <div class="text"><a href="https://www.w3schools.com/"><i class="fas fa-play"></i></a></div>
                                                </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="user_avatar mr-3"><img src={ghibli_4} className="img_avata"></img></div>
                                        
                                        <div className="group_info_user">
                                            <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                            <div className="card-text"><a href="#">Thuhoa</a></div>
                                            <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                        </div>                                      
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="card">
                                        <div className="card_img_bg">
                                                <img className="card-img-top" src={ghibli_1} alt="Card image cap"></img>
                                                <div class="overlay">
                                                    <div class="text"><a href="https://www.w3schools.com/"><i class="fas fa-play"></i></a></div>
                                                </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="user_avatar mr-3"><img src={ghibli_4} className="img_avata"></img></div>
                                            
                                            <div className="group_info_user">
                                                <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                                <div className="card-text"><a href="#">Thuhoa</a></div>
                                                <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                            </div>                                      
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="card">
                                        <div className="card_img_bg">
                                            <img className="card-img-top" src={ghibli_4} alt="Card image cap"></img>
                                            <div class="overlay">
                                                <div class="text"><a href="https://www.w3schools.com/"><i class="fas fa-play"></i></a></div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="user_avatar mr-3"><img src={ghibli_4} className="img_avata"></img></div>
                                            
                                            <div className="group_info_user">
                                                <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                                <div className="card-text"><a href="#">Thuhoa</a></div>
                                                <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                            </div>                                      
                                        </div>
                                    </div>
                            </div>
                    </div>

                    {/* hàng 2 */}
                    <div className="row recently_row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="card">
                                <       div className="card_img_bg">
                                            <img className="card-img-top" src={ghibli_2} alt="Card image cap"></img>
                                            <div class="overlay">
                                                <div class="text"><a href="https://www.w3schools.com/"><i class="fas fa-play"></i></a></div>
                                            </div>
                                        </div>
                                    <div className="card-body">
                                        <div className="user_avatar mr-3"><img src={ghibli_4} className="img_avata"></img></div>
                                        
                                        <div className="group_info_user">
                                            <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                            <div className="card-text"><a href="#">Thuhoa</a></div>
                                            <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                        </div>                                      
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="card">
                            <div className="card_img_bg">
                                            <img className="card-img-top" src={ghibli_3} alt="Card image cap"></img>
                                            <div class="overlay">
                                                <div class="text"><a href="https://www.w3schools.com/"><i class="fas fa-play"></i></a></div>
                                            </div>
                                        </div>
                                    <div className="card-body">
                                        <div className="user_avatar mr-3"><img src={ghibli_4} className="img_avata"></img></div>
                                        
                                        <div className="group_info_user">
                                            <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                            <div className="card-text"><a href="#">Thuhoa</a></div>
                                            <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                        </div>                                      
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="card">
                                <div className="card_img_bg">
                                            <img className="card-img-top" src={ghibli_2} alt="Card image cap"></img>
                                            <div class="overlay">
                                                <div class="text"><a href="https://www.w3schools.com/"><i class="fas fa-play"></i></a></div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="user_avatar mr-3"><img src={ghibli_4} className="img_avata"></img></div>
                                            
                                            <div className="group_info_user">
                                                <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                                <div className="card-text"><a href="#">Thuhoa</a></div>
                                                <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                            </div>                                      
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="card">
                                <div className="card_img_bg">
                                            <img className="card-img-top" src={ghibli_4} alt="Card image cap"></img>
                                            <div class="overlay">
                                                <div class="text"><a href="https://www.w3schools.com/"><i class="fas fa-play"></i></a></div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="user_avatar mr-3"><img src={ghibli_4} className="img_avata"></img></div>
                                            
                                            <div className="group_info_user">
                                                <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                                <div className="card-text"><a href="#">Thuhoa</a></div>
                                                <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                            </div>                                      
                                        </div>
                                    </div>
                            </div>
                        </div>
                    {/* hàng 3 */}
                    <div className="row mx-5 my-3"><h5>&#9679; Recomend</h5></div>
                    <div className="row recently_row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="card">
                                <div className="card_img_bg">
                                            <img className="card-img-top" src={ghibli_1} alt="Card image cap"></img>
                                            <div class="overlay">
                                                <div class="text"><a href="https://www.w3schools.com/"><i class="fas fa-play"></i></a></div>
                                            </div>
                                        </div>
                                    <div className="card-body">
                                        <div className="user_avatar mr-3"><img src={ghibli_4} className="img_avata"></img></div>
                                        
                                        <div className="group_info_user">
                                            <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                            <div className="card-text"><a href="#">Thuhoa</a></div>
                                            <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                        </div>                                      
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="card">
                            <div className="card_img_bg">
                                            <img className="card-img-top" src={ghibli_4} alt="Card image cap"></img>
                                            <div class="overlay">
                                                <div class="text"><a href="https://www.w3schools.com/"><i class="fas fa-play"></i></a></div>
                                            </div>
                                        </div>
                                    <div className="card-body">
                                        <div className="user_avatar mr-3"><img src={ghibli_4} className="img_avata"></img></div>
                                        
                                        <div className="group_info_user">
                                            <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                            <div className="card-text"><a href="#">Thuhoa</a></div>
                                            <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                        </div>                                      
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="card">
                                <div className="card_img_bg">
                                            <img className="card-img-top" src={ghibli_1} alt="Card image cap"></img>
                                            <div class="overlay">
                                                <div class="text"><a href="https://www.w3schools.com/"><i class="fas fa-play"></i></a></div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="user_avatar mr-3"><img src={ghibli_4} className="img_avata"></img></div>
                                            
                                            <div className="group_info_user">
                                                <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                                <div className="card-text"><a href="#">Thuhoa</a></div>
                                                <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                            </div>                                      
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="card">
                                <div className="card_img_bg">
                                            <img className="card-img-top" src={ghibli_4} alt="Card image cap"></img>
                                            <div class="overlay">
                                                <div class="text"><a href="https://www.w3schools.com/"><i class="fas fa-play"></i></a></div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="user_avatar mr-3"><img src={ghibli_3} className="img_avata"></img></div>
                                            
                                            <div className="group_info_user">
                                                <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                                <div className="card-text"><a href="#">Thuhoa</a></div>
                                                <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                            </div>                                      
                                        </div>
                                    </div>
                            </div>
                        </div>
                    {/* hàng 4 */}

                    <div className="row recently_row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="card">
                                    <img className="card-img-top" src={ghibli_4} alt="Card image cap"></img>
                                    <div className="card-body">
                                        <div className="user_avatar mr-3"><img src={ghibli_2} className="img_avata"></img></div>
                                        
                                        <div className="group_info_user">
                                            <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                            <div className="card-text"><a href="#">Thuhoa</a></div>
                                            <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                        </div>                                      
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="card">
                            <div className="card_img_bg">
                                            <img className="card-img-top" src={ghibli_2} alt="Card image cap"></img>
                                            <div class="overlay">
                                                <div class="text"><a href="https://www.w3schools.com/"><i class="fas fa-play"></i></a></div>
                                            </div>
                                        </div>
                                    <div className="card-body">
                                        <div className="user_avatar mr-3"><img src={ghibli_1} className="img_avata"></img></div>
                                        
                                        <div className="group_info_user">
                                            <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                            <div className="card-text"><a href="#">Thuhoa</a></div>
                                            <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                        </div>                                      
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="card">
                                <div className="card_img_bg">
                                            <img className="card-img-top" src={ghibli_1} alt="Card image cap"></img>
                                            <div class="overlay">
                                                <div class="text"><a href="https://www.w3schools.com/"><i class="fas fa-play"></i></a></div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="user_avatar mr-3"><img src={ghibli_3} className="img_avata"></img></div>
                                            
                                            <div className="group_info_user">
                                                <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                                <div className="card-text"><a href="#">Thuhoa</a></div>
                                                <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                            </div>                                      
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="card">
                                <div className="card_img_bg">
                                            <img className="card-img-top" src={ghibli_3} alt="Card image cap"></img>
                                            <div class="overlay">
                                                <div class="text"><a href="https://www.w3schools.com/"><i class="fas fa-play"></i></a></div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="user_avatar mr-3"><img src={ghibli_4} className="img_avata"></img></div>
                                            
                                            <div className="group_info_user">
                                                <div className="card-title"><h6><a href="#">PHP tools are used to build shopping carts?</a></h6></div>
                                                <div className="card-text"><a href="#">Thuhoa</a></div>
                                                <div className="card-text"><a href="#">45N views</a> <a>&#9679;</a> <a href="#">1 year ago</a></div>                                          
                                            </div>                                      
                                        </div>
                                    </div>
                            </div>
                        </div>
                        
                </div>
            </div>

            </div> 
        </div>

  
    )

        

}



