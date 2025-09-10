import { useState } from 'react'
import RegistrationForm from "./components/RegistrationForm.jsx"
import FormikForm from "./components/formikForm.js";

export default function App() {
  const [mode, setMode] = useState('controlled') // 'controlled' | 'formik'

  return (
    <div style={{ minHeight: '100svh', display: 'grid', placeItems: 'center', background: '#0b1220', color: '#e6ebff', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 480 }}>
        <h1 style={{ textAlign: 'center', marginBottom: 16 }}>React Form Handling</h1>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 16 }}>
          <button
            onClick={() => setMode('controlled')}
            style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #3a4a7a', background: mode === 'controlled' ? '#1e2a4a' : 'transparent', color: 'inherit', cursor: 'pointer' }}
          >
            Controlled
          </button>
          <button
            onClick={() => setMode('formik')}
            style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #3a4a7a', background: mode === 'formik' ? '#1e2a4a' : 'transparent', color: 'inherit', cursor: 'pointer' }}
          >
            Formik + Yup
          </button>
        </div>

        {mode === 'controlled' ? <RegistrationForm /> : <FormikForm />}
      </div>
    </div>
  )
}