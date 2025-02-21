import {React, use, useState} from 'react'
import './ProjectsPage.css'

function ProjectsPage({ marginTop }) {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });
  
  if(!isMobile) {
    return (
      <div className="page-container" style={{ marginTop: `${marginTop}px` }}>
        <h1 className="pageTitle">Project</h1>
        <div className="project-section">
          <div className="image-box"></div>
          <div className="text-box text-box-odd">
            <h4 className="text-box-header">Project Title</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor
            voluptatem, a exercitationem asperiores soluta necessitatibus eaque
            illum, ut neque aliquam debitis hic assumenda consequatur adipisci
            ipsam deserunt! Numquam, doloribus. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ratione tenetur inventore ea odit
            architecto cum recusandae hic. Suscipit, vero! Nobis officiis quis
            quibusdam facilis suscipit placeat voluptatem fugiat, perspiciatis
            asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime atque esse at, ducimus non quo magnam rerum nobis ullam vero
            blanditiis harum. Modi, perferendis alias optio quae ipsam similique
            commodi!
          </div>
        </div>
        <div className="project-section">
          <div className="text-box text-box-even">
            <h4 className="text-box-header">Project Title</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor
            voluptatem, a exercitationem asperiores soluta necessitatibus eaque
            illum, ut neque aliquam debitis hic assumenda consequatur adipisci
            ipsam deserunt! Numquam, doloribus. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ratione tenetur inventore ea odit
            architecto cum recusandae hic. Suscipit, vero! Nobis officiis quis
            quibusdam facilis suscipit placeat voluptatem fugiat, perspiciatis
            asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime atque esse at, ducimus non quo magnam rerum nobis ullam vero
            blanditiis harum. Modi, perferendis alias optio quae ipsam similique
            commodi!
          </div>
          <div className="image-box"></div>
        </div>
        <div className="project-section">
          <div className="image-box"></div>
          <div className="text-box text-box-odd">
            <h4 className="text-box-header">Project Title</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor
            voluptatem, a exercitationem asperiores soluta necessitatibus eaque
            illum, ut neque aliquam debitis hic assumenda consequatur adipisci
            ipsam deserunt! Numquam, doloribus. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ratione tenetur inventore ea odit
            architecto cum recusandae hic. Suscipit, vero! Nobis officiis quis
            quibusdam facilis suscipit placeat voluptatem fugiat, perspiciatis
            asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime atque esse at, ducimus non quo magnam rerum nobis ullam vero
            blanditiis harum. Modi, perferendis alias optio quae ipsam similique
            commodi!
          </div>
        </div>
        <div className="project-section">
          <div className="text-box text-box-even">
            <h4 className="text-box-header">Project Title</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor
            voluptatem, a exercitationem asperiores soluta necessitatibus eaque
            illum, ut neque aliquam debitis hic assumenda consequatur adipisci
            ipsam deserunt! Numquam, doloribus. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ratione tenetur inventore ea odit
            architecto cum recusandae hic. Suscipit, vero! Nobis officiis quis
            quibusdam facilis suscipit placeat voluptatem fugiat, perspiciatis
            asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime atque esse at, ducimus non quo magnam rerum nobis ullam vero
            blanditiis harum. Modi, perferendis alias optio quae ipsam similique
            commodi!
          </div>
          <div className="image-box"></div>
        </div>
      </div>
    );
  } else {
   return (
     <div className="page-container" style={{ marginTop: `${marginTop}px` }}>
       <h1 className="pageTitle">Projects</h1>
       <div className="project-section">
         <div className="text-box text-box-odd">
           <h4 className="text-box-header">Project Title</h4>
           <div className="image-box"></div>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
           dolor voluptatem, a exercitationem asperiores soluta necessitatibus
           eaque illum, ut neque aliquam debitis hic assumenda consequatur
           adipisci ipsam deserunt! Numquam, doloribus. Lorem ipsum dolor sit,
           amet consectetur adipisicing elit. Ratione tenetur inventore ea odit
           architecto cum recusandae hic. Suscipit, vero! Nobis officiis quis
           quibusdam facilis suscipit placeat voluptatem fugiat, perspiciatis
           asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Maxime atque esse at, ducimus non quo magnam rerum nobis ullam vero
           blanditiis harum. Modi, perferendis alias optio quae ipsam similique
           commodi!
         </div>
       </div>
       <div className="project-section">
         <div className="text-box text-box-even">
           <h4 className="text-box-header">Project Title</h4>
           <div className="image-box"></div>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
           dolor voluptatem, a exercitationem asperiores soluta necessitatibus
           eaque illum, ut neque aliquam debitis hic assumenda consequatur
           adipisci ipsam deserunt! Numquam, doloribus. Lorem ipsum dolor sit,
           amet consectetur adipisicing elit. Ratione tenetur inventore ea odit
           architecto cum recusandae hic. Suscipit, vero! Nobis officiis quis
           quibusdam facilis suscipit placeat voluptatem fugiat, perspiciatis
           asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Maxime atque esse at, ducimus non quo magnam rerum nobis ullam vero
           blanditiis harum. Modi, perferendis alias optio quae ipsam similique
           commodi!
         </div>
       </div>
       <div className="project-section">
         <div className="text-box text-box-odd">
           <h4 className="text-box-header">Project Title</h4>
           <div className="image-box"></div>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
           dolor voluptatem, a exercitationem asperiores soluta necessitatibus
           eaque illum, ut neque aliquam debitis hic assumenda consequatur
           adipisci ipsam deserunt! Numquam, doloribus. Lorem ipsum dolor sit,
           amet consectetur adipisicing elit. Ratione tenetur inventore ea odit
           architecto cum recusandae hic. Suscipit, vero! Nobis officiis quis
           quibusdam facilis suscipit placeat voluptatem fugiat, perspiciatis
           asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Maxime atque esse at, ducimus non quo magnam rerum nobis ullam vero
           blanditiis harum. Modi, perferendis alias optio quae ipsam similique
           commodi!
         </div>
       </div>
       <div className="project-section">
         <div className="text-box text-box-even">
           <h4 className="text-box-header">Project Title</h4>
           <div className="image-box"></div>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
           dolor voluptatem, a exercitationem asperiores soluta necessitatibus
           eaque illum, ut neque aliquam debitis hic assumenda consequatur
           adipisci ipsam deserunt! Numquam, doloribus. Lorem ipsum dolor sit,
           amet consectetur adipisicing elit. Ratione tenetur inventore ea odit
           architecto cum recusandae hic. Suscipit, vero! Nobis officiis quis
           quibusdam facilis suscipit placeat voluptatem fugiat, perspiciatis
           asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Maxime atque esse at, ducimus non quo magnam rerum nobis ullam vero
           blanditiis harum. Modi, perferendis alias optio quae ipsam similique
           commodi!
         </div>
       </div>
     </div>
   ); 
  }
}

export default ProjectsPage;