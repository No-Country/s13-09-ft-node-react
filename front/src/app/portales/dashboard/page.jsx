import React from 'react';
import DoctorSidebar from '../components/DoctorSidebar';
import PatientSidebar from '../components/PatientSidebar';

const DashboardPage = ({ userType }) => {
    return (
        <div className="flex">
            {/* Sidebar según el tipo de usuario */}
            {/* {userType === 'medico' ? <DoctorSidebar /> : <PatientSidebar />} */}
            {userType === 'medico' ? <PatientSidebar /> : <DoctorSidebar />}

            {/* Contenido principal */}
            <div className="flex-1 p-4">
                <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
                {/* Aquí puedes agregar el contenido específico del dashboard */}
            </div>
        </div>
    );
};

export default DashboardPage;
