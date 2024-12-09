'use client'

import { useState } from 'react'
import { Trash2, Check, Plus, Edit } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Task {
  id: number
  text: string
  completed: boolean
  isEditing: boolean
}

export default function TodoistClone() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  const addTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask.trim(), completed: false, isEditing: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const editTask = (id: number, newText: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText, isEditing: false } : task
    ))
  }

  const startEditing = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isEditing: true } : task
    ))
  }

  const cancelEditing = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isEditing: false } : task
    ))
  }

  return (
    <div><h1>clone prt</h1></div>
  )
}
