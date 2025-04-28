"use client"
import { ProjectsDiary } from '@/projects';
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



export default function page() {
    const filterProjectsByStatus =(status: string) => {
        return ProjectsDiary.filter(project => project.status.toLowerCase() === status.toLowerCase());
      }
      const ongoingProjects = filterProjectsByStatus("on-going");
const completedProjects = filterProjectsByStatus("completed");
const allProjects = ProjectsDiary
  return (
    <div className="flex flex-col">
    <div
      className="bg-no-repeat bg-center bg-cover rounded-[10px] h-[450px]"
      style={{
        backgroundImage: `url(/img/wwd.jpg)`,
      }}
    >
      <div className="h-full w-full bg-[#034833]/80  py-[60px] lg:px-[137px] flex flex-col justify-center items-center text-white gap-[30px] text-center max-mobile:px-6">
        <div className="text-d1 max-mobile:text-h1 max-mobile:w-dvw text-wrap">
          Projects Diary
        </div>
        <div className="text-md">Home / Projects</div>
      </div>
    </div>
    <div className="">
      <div className="px-[120px] max-mobile:px-6 py-24 flex flex-col">
        <div className="text-h3">
        Track the Progress, Challenges, and Milestones of Our Key Projects
        </div>
        <div className="text-base text-dark-grey font-normal">
        Stay updated with real-time insights into our ongoing and completed projects. The Projects Diary offers a detailed look at the journey behind each initiative — from planning and execution to overcoming obstacles and achieving success. Explore how we are delivering innovative solutions across various sectors and transforming industries one project at a time.
        </div>
        <Tabs defaultValue="all" className="w-full mt-5">
  <TabsList className=' flex justify-center bg-transparent'>
    <TabsTrigger value="all">All Projects</TabsTrigger>
    <TabsTrigger value="on-going">Ongoing</TabsTrigger>
    <TabsTrigger value="completed">Completed</TabsTrigger>
  </TabsList>
  <TabsContent value="all">
    <div className="grid grid-cols-1 gap-10 mt-5 max-mobile:grid-cols-1">
      {allProjects.map((project, i) => (
        <div key={i} className="flex flex-col gap-4">
          <div className="text-h4">{project.title}</div>
          <div className="text-base text-dark-grey font-normal">Client: {project.client}</div>
          <div className="text-base text-dark-grey font-normal capitalize">Location: {project.location}</div>
          <div className="text-base text-dark-grey font-normal">Status: <span className={`${project.status.toLowerCase()==='completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} p-2 rounded-full`}>{project.status.toLowerCase()}</span></div>
          <div className={`grid grid-cols-${project.imgs.length} grid-cols-4 gap-4 max-mobile:grid-cols-1`}>
          {
            project.imgs.map((img, i) => (
              <React.Fragment key={i}>
              <Dialog>
  <DialogTrigger>
              <img src={img} alt={project.title} className="w-full h-[200px] object-cover object-center rounded-[10px]" />
    
  </DialogTrigger>
  <DialogContent>
    <DialogTitle>{project.title}</DialogTitle>
              <img src={img} alt={project.title} className="w-full object-cover object-center rounded-[10px]" />
  </DialogContent>
</Dialog>

              </React.Fragment>
            ))
          }
          </div>
        </div>
      ))}
    </div>
  </TabsContent>
  <TabsContent value="on-going">
    <div className="grid grid-cols-1 gap-10 mt-5 max-mobile:grid-cols-1">
      {ongoingProjects.map((project, i) => (
        <div key={i} className="flex flex-col gap-4">
          <div className="text-h4">{project.title}</div>
          <div className="text-base text-dark-grey font-normal">Client: {project.client}</div>
          <div className="text-base text-dark-grey font-normal capitalize">Location: {project.location}</div>
          <div className="text-base text-dark-grey font-normal">Status: <span className={`${project.status.toLowerCase()==='completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} p-2 rounded-full`}>{project.status.toLowerCase()}</span></div>
          <div className={`grid grid-cols-${project.imgs.length} grid-cols-4 gap-4 max-mobile:grid-cols-1`}>
          {
            project.imgs.map((img, i) => (
              <React.Fragment key={i}>
              <Dialog>
  <DialogTrigger>
              <img src={img} alt={project.title} className="w-full h-[200px] object-cover object-center rounded-[10px]" />
              
  </DialogTrigger>
  <DialogContent>
    <DialogTitle>{project.title}</DialogTitle>
              <img src={img} alt={project.title} className="w-full object-cover object-center rounded-[10px]" />
  </DialogContent>
</Dialog>

              </React.Fragment>
            ))
          }
          </div>
        </div>
      ))}
    </div>
  </TabsContent>
  <TabsContent value="completed">
    <div className="grid grid-cols-1 gap-10 mt-5 max-mobile:grid-cols-1">
      {completedProjects.map((project, i) => (
        <div key={i} className="flex flex-col gap-4">
          <div className="text-h4">{project.title}</div>
          <div className="text-base text-dark-grey font-normal">Client: {project.client}</div>
          <div className="text-base text-dark-grey font-normal capitalize">Location: {project.location}</div>
          <div className="text-base text-dark-grey font-normal">Status: <span className={`${project.status.toLowerCase()==='completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} p-2 rounded-full`}>{project.status.toLowerCase()}</span></div>
          <div className={`grid grid-cols-${project.imgs.length} grid-cols-4 gap-4 max-mobile:grid-cols-1`}>
          {
            project.imgs.map((img, i) => (
              <React.Fragment key={i}>
              <Dialog>
              <DialogTrigger>
              <img src={img} alt={project.title} className="w-full h-[200px] object-cover object-center rounded-[10px]" />
              
  </DialogTrigger>
  <DialogContent>
    <DialogTitle>{project.title}</DialogTitle>
              <img src={img} alt={project.title} className="w-full object-cover object-center rounded-[10px]" />
  </DialogContent>
</Dialog>

              </React.Fragment>
            ))
          }
          </div>
        </div>
      ))}
    </div>
  </TabsContent>
</Tabs>

            </div>
      </div>
      </div>
  )
}
