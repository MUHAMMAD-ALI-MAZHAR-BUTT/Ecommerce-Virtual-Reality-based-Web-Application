import React from 'react'
import "../CSS/Pages/FAQS.css"
function FAQS() {
  return (
<>
<div className="container-fluid FAQS-Cover py-5">
  <div className="row py-5">
<div className="col  px-sm-5 mx-sm-5">
<ul className="nav FAQS-Tabs nav-justified   nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="TOPFAQS-tab" data-bs-toggle="pill" data-bs-target="#TOPFAQS" type="button" role="tab" aria-controls="TOPFAQS" aria-selected="true">TOP FAQS </button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="VirtualTour-tab" data-bs-toggle="pill" data-bs-target="#VirtualTour" type="button" role="tab" aria-controls="VirtualTour" aria-selected="false">3D Virtual Tour</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="VirtualEnv-tab" data-bs-toggle="pill" data-bs-target="#VirtualEnv" type="button" role="tab" aria-controls="VirtualEnv" aria-selected="false">MetaMart</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="General-tab" data-bs-toggle="pill" data-bs-target="#General" type="button" role="tab" aria-controls="General" aria-selected="false">General</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="SizingAndFitting-tab" data-bs-toggle="pill" data-bs-target="#SizingAndFitting" type="button" role="tab" aria-controls="SizingAndFitting" aria-selected="false">Size & Fitting</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="ReturnPolicy-tab" data-bs-toggle="pill" data-bs-target="#ReturnPolicy" type="button" role="tab" aria-controls="ReturnPolicy" aria-selected="false">Return Policy</button>
  </li>

</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="TOPFAQS" role="tabpanel" aria-labelledby="TOPFAQS-tab">
  <div className="accordion accordion-flush " id="accordionFlushExample">
  <div className="accordion-item mb-1">
    <h2 className="accordion-header " id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      How do I make a Payment?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">You can simply make your payment with a card during purchasing. If you have an issue with payment using a card then you also have a choice of paying payment at the time of delivery along with delivery charges.</div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What are possible payment methods?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Customer can make payment using any bank card or hand-to-hand cash at the time of delivery of the product.</div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How do I cancel the order?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">In case you want to cancel your order. Just open the application. Go to option “My Orders”. Then select the order you want to cancel and confirm it. Your order will be canceled.</div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-headingfour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
      How do I receive my payment back after the cancellation of the order?
      </button>
    </h2>
    <div id="flush-collapsefour" className="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">In case you have made payment using the card at the time of buying the product then your payment will be reverted back to your account. </div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-headingfive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
      Is there any system for paying money in installments?
      </button>
    </h2>
    <div id="flush-collapsefive" className="accordion-collapse collapse" aria-labelledby="flush-headingfive" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Unfortunately, we do not provide a system for making payments using installments. You have to make full payment at the time of purchasing in order to buy a product.</div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-headingsix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapsesix">
      How do I contact you?
      </button>
    </h2>
    <div id="flush-collapsesix" className="accordion-collapse collapse" aria-labelledby="flush-headingsix" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">If you have any query or complaint then visit the Contact us page.</div>
    </div>
  </div>
</div>

  </div>
  <div className="tab-pane fade" id="General" role="tabpanel" aria-labelledby="General-tab">
  <div className='accordion'>
    <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-headingseven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseseven" aria-expanded="false" aria-controls="flush-collapseseven">
       Do you provide sale events?
      </button>
    </h2>
    <div id="flush-collapseseven" className="accordion-collapse collapse" aria-labelledby="flush-headingseven" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Yes in our E-commerce website, we provide exciting sale on start and end of every season.</div>
    </div>
  </div>
    <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-headingeight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseeight" aria-expanded="false" aria-controls="flush-collapseeight">
      Do our provide promos?
      </button>
    </h2>
    <div id="flush-collapseeight" className="accordion-collapse collapse" aria-labelledby="flush-headingeight" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Yes, on special events throughout the year, we will be providing exciting promos. So stay tuned with us to get all these exciting offers.</div>
    </div>
  </div>

  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-headingnine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsenine" aria-expanded="false" aria-controls="flush-collapsenine">
      Do you provide products other than jackets?
      </button>
    </h2>
    <div id="flush-collapsenine" className="accordion-collapse collapse" aria-labelledby="flush-headingnine" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Unfortunately, we do not provide products like shalwar kameez, jeans, shirts, and underwear. We only provide fancy, amazing jackets of different types like puffer jackets, sweat jackets, and leather jackets.</div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-headingten">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseten" aria-expanded="false" aria-controls="flush-collapseten">
      Do you provide delivery service?
      </button>
    </h2>
    <div id="flush-collapseten" className="accordion-collapse collapse" aria-labelledby="flush-headingten" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Yes, we do provide delivery service. Our delivery service is quick and you will receive your package on time.</div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-headingeleven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseeleven" aria-expanded="false" aria-controls="flush-collapseeleven">
      Which headset is required to experience a virtual environment?
      </button>
    </h2>
    <div id="flush-collapseeleven" className="accordion-collapse collapse" aria-labelledby="flush-headingeleven" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Yes, to experience the metaverse feature in our website you have to use Oculus VR headset.
</div>
    </div>
  </div>
  </div>
  
  </div>
  <div className="tab-pane fade" id="SizingAndFitting" role="tabpanel" aria-labelledby="SizingAndFitting-tab">
    <div  className='accordion'>
    <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading0">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0" aria-expanded="false" aria-controls="flush-collapse0">
      Which body measurements are required for fitting purpose.
      </button>
    </h2>
    <div id="flush-collapse0" className="accordion-collapse collapse" aria-labelledby="flush-heading0" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      We want following measurments of yours to recommend you best fit size.<br></br>
<ul>
<li>Chest</li>
<li>Waist</li>
<li>Sleeves length</li>
<li>Length</li>
</ul>
      </div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading1">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1">
      Which sizes do you provide?
      </button>
    </h2>
    <div id="flush-collapse1" className="accordion-collapse collapse" aria-labelledby="flush-heading1" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      We provides products in 4 standard sizes<br></br>
<ul>
<li>Small (S)</li>
<li>Medium (M)</li>
<li>Large (L)</li>
<li>Extra large (XL)</li>
</ul>
  </div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
      Will your recommended size be 100% fit?
      </button>
    </h2>
    <div id="flush-collapse2" className="accordion-collapse collapse" aria-labelledby="flush-heading2" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      We have tried to recommend a size approximately fit for you. We have tried to make recommendation accuracy as high as possible.
      </div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
      How does size recommendation work?
      </button>
    </h2>
    <div id="flush-collapse3" className="accordion-collapse collapse" aria-labelledby="flush-heading3" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      We are using an intelligent model that will recommend the best size fit on the basis of the customer’s body measurements that we will collect from the customer through a form.
      </div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading4">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
      Do you have XXL size available?
      </button>
    </h2>
    <div id="flush-collapse4" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      We only provide those sizes which are common. In case you want a customized size. Then you can use our “request product “ service. So we will try to provide the required product.
      </div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading5">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
      How will I check the fitting of the jacket?
      </button>
    </h2>
    <div id="flush-collapse5" className="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">You cannot wear a dress virtually but we have provided avatars approximately of your size. If a jacket or any dress fit that avatar then obviously it will fit you.</div>
    </div>
  </div>



    </div>
    </div>  
  <div className="tab-pane fade" id="ReturnPolicy" role="tabpanel" aria-labelledby="ReturnPolicy-tab">
    <div className='accordion'>
    <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading6">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
      Do you provide return service?
      </button>
    </h2>
    <div id="flush-collapse6" className="accordion-collapse collapse" aria-labelledby="flush-heading6" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Unfortunately, we don’t provide the service of returning a product.</div>
    </div>
  </div>
    </div>
  </div>
  <div className="tab-pane fade" id="VirtualTour" role="tabpanel" aria-labelledby="VirtualTour-tab">
    <div className='accordion'>
    <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading7">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
      What is metaverse?
      </button>
    </h2>
    <div id="flush-collapse7" className="accordion-collapse collapse" aria-labelledby="flush-heading7" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">The metaverse is actually a 3D virtual reality that would enable people to interact with each other. You can think of the metaverse as a connected ecosystem of online 3D virtual environments, where users could interact with each other, create assets, play games, work and collaborate with each other.</div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading8">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
      What are the important traits of metaverse?
      </button>
    </h2>
    <div id="flush-collapse8" className="accordion-collapse collapse" aria-labelledby="flush-heading8" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      Some crucial traits are given below<br></br>
<ul>
  <li>
  Users in the metaverse have the ability to communicate and interact with other users and spaces in the metaverse
  </li>
  <li>
  Avatars and the assets created in the metaverse are easily accessible and operable on different spaces in the metaverse. 
  </li>
  <li>
  The corporeality trait of the metaverse implies that irrespective of its virtual nature, the metaverse would follow parallels with the real world. For example, the metaverse would also have limited resources. 
  </li>
<li>
The most important trait of the metaverse is the economic potential with the possibility for creating a completely new and full-fledged economy.
</li>
</ul>
      </div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading9">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9">
      What are the uses of the metaverse?
      </button>
    </h2>
    <div id="flush-collapse9" className="accordion-collapse collapse" aria-labelledby="flush-heading9" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">The first promising use case of the metaverse is evident in the possibilities of using the metaverse for unlocking new marketing opportunities. People can interact and socialize with each other through digital avatars in the metaverse. Brands could capitalize on this factor for identifying favorable marketing opportunities. 
The metaverse could also open up new opportunities for creating virtual workspaces. For example, enterprises could utilize virtual reality developers for creating customized virtual workspaces suited ideally for company management and employees. 
You can also discover many other interesting use cases of the metaverse, such as creating virtual learning spaces or virtual tourism. 
</div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading10">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse10" aria-expanded="false" aria-controls="flush-collapse10">
      What is role of AR and VR in the metaverse?
      </button>
    </h2>
    <div id="flush-collapse10" className="accordion-collapse collapse" aria-labelledby="flush-heading10" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Virtual reality offers an immersive experience for anyone who can put 
      on a headset. It enables anyone to see and work in a digital world. With full VR headsets, users can dive
       into a 360-degree virtual world, where people can move around easily. On the other hand, augmented reality 
       is basically a reflection of the digital world in the real world. AR-connected glasses could help in driving
        the development of new 3D virtual environments, while VR could drive better engagement in metaverse
         participants. </div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading11">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse11" aria-expanded="false" aria-controls="flush-collapse11">
      What is the difference between the metaverse and virtual reality?
      </button>
    </h2>
    <div id="flush-collapse11" className="accordion-collapse collapse" aria-labelledby="flush-heading11" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        The metaverse is an immersive virtual world where people can meet, chat and collaborate as if they were 
        in the same room. In contrast, traditional virtual worlds are generally unrealistic and unengaging, and the people who meet there do not look very human.</div>
    </div>
  </div>


    </div>
    </div>  
  <div className="tab-pane fade" id="VirtualEnv" role="tabpanel" aria-labelledby="VirtualEnv-tab">
  <div className='accordion'>
    <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading12">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse12" aria-expanded="false" aria-controls="flush-collapse12">
      What is a virtual tour?
      </button>
    </h2>
    <div id="flush-collapse12" className="accordion-collapse collapse" aria-labelledby="flush-heading12" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Virtual tours are interactive online 360° x 180° panoramic 3D images that simulate a location. They represent a real location in virtual reality. They do not video that limit what a viewer can see, but are 360° image based that are interactive. They give the viewer a choice in what to look at in the given location in high definition and the freedom to move around the location as they choose. The freedom to interact makes the tour a realistic and engaging marketing tool.</div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading13">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse13" aria-expanded="false" aria-controls="flush-collapse13">
      What type of businesses should use virtual tour technologies?
      </button>
    </h2>
    <div id="flush-collapse13" className="accordion-collapse collapse" aria-labelledby="flush-heading13" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Just about every single industry uses virtual tours. From real estate companies to hospitality to retail and even professional services such as dentists, chiropractors, and physical therapists can benefit from having a virtual tour.</div>
    </div>
  </div>

  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading144">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse144" aria-expanded="false" aria-controls="flush-collapse144">
      Can the virtual tour be placed on the website?
      </button>
    </h2>
    <div id="flush-collapse144" className="accordion-collapse collapse" aria-labelledby="flush-heading144" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Definitely! You can easily place it on your business website. It is just a matter of adding one line of code. You can also link it to share on social media networks, blogs, email, and wherever else you can think of placing it.</div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading15">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse15" aria-expanded="false" aria-controls="flush-collapse15">
      What are other names used for a virtual tour?
      </button>
    </h2>
    <div id="flush-collapse15" className="accordion-collapse collapse" aria-labelledby="flush-heading15" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">HTML5 virtual tour, Virtual panorama, Panoramic tour, Panorama, IPIX™, VR, Virtual reality tour, 360 VR, 360-degree tour, multi-location tour, real estate VR, online virtual tour, 360 tours, one shot tour, immersive imaging, 360 immersive images, 3d tour, java virtual tour, java 360 tour, quick time tour.</div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading16">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse16" aria-expanded="false" aria-controls="flush-collapse16">
      What are some benefits of a virtual tour?
      </button>
    </h2>
    <div id="flush-collapse16" className="accordion-collapse collapse" aria-labelledby="flush-heading16" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      Some benefits of the virtual tour are listed below: <br></br>
      <ul>
        <li>Interact more meaningfully with customers: A virtual tour lets visitors explore your business from anywhere.</li>
        <li>Increase engagement: When customers like what they see in a virtual tour or see something that piques their interest, they are more likely to visit in person.
</li>
<li>Captivate customers: While having plain text and still images are fine, offering a tour keeps viewers engaged on your website for longer periods.
</li>
      </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item mb-1">
    <h2 className="accordion-header" id="flush-heading17">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse17" aria-expanded="false" aria-controls="flush-collapse17">
      What are challenges of a virtual tour?
      </button>
    </h2>
    <div id="flush-collapse17" className="accordion-collapse collapse" aria-labelledby="flush-heading17" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      Despite the many benefits of having a virtual tour for your business, there are some challenges to keep in mind, too. <br></br>
      <ul>
        <li><b>Cost:</b>  For many companies and small businesses, the price of creating a visually appealing and high-quality virtual tour is too high. In addition to software, special equipment and sometimes a professional photographer are needed.</li>
        <li><b>Time-consuming:</b> if done correctly: Creating a virtual tour that customers will benefit from seeing is hard, time-consuming work. It can take hours to get all the necessary footage to develop the tour for a large space.</li>
<li><b>Updation:</b> Update a virtual tour with real time is another challenge of embedding virtual tours in website.
</li>
      </ul>
      </div>
    </div>
  </div>


    </div>
  </div>
</div>
</div>
</div>
</div>
</>
  )
}

export default FAQS