import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm'

function App() {
  return (
    <div className="flex flex-col gap-6 items-center p-6">
      <h1 className="text-2xl font-bold mb-4">User Registration</h1>
      <RegistrationForm />
      <FormikForm />
    </div>
  )
}

export default App
