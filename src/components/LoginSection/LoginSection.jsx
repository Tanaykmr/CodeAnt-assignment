import { useState } from 'react';
import azure from '../../assets/azure.svg';
import bitbucket from '../../assets/bitbucket.svg';
import github from '../../assets/github.svg';
import gitlab from '../../assets/gitlab.svg';
import nameLogo from '../../assets/name_logo.svg';
import sso from '../../assets/sso.svg';
export default function LoginSection() {
  const [mode, setMode] = useState('SAAS');

  return (
    <div className="flex min-h-[550px] flex-col items-center gap-6 rounded-xl p-6 shadow-md-all-sides">
      <div>
        <img src={nameLogo} />
      </div>
      <div className="text-center text-2xl font-medium text-[#081735]">
        Welcome to CodeAnt AI
      </div>
      <div className="flex w-full justify-center text-[#414651]">
        <button
          className={`w-48 rounded border px-4 py-2 transition-colors ${
            mode === 'SAAS'
              ? 'bg-[#1570EF] text-white'
              : 'hover:bg-[#1570EF] hover:text-white'
          }`}
          onClick={() => setMode('SAAS')}
        >
          SAAS
        </button>

        <button
          className={`w-48 rounded border px-4 py-2 transition-colors ${
            mode === 'other'
              ? 'bg-[#1570EF] text-white'
              : 'hover:bg-[#1570EF] hover:text-white'
          }`}
          onClick={() => setMode('other')}
        >
          Self Hosted
        </button>
      </div>
      <hr className="border-1 -mx-6 w-[calc(100%+3rem)] border-gray-300" />

      <div className="flex flex-col justify-center gap-4">
        {mode === 'SAAS' ? (
          <>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border px-10 py-4 duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-[300px] md:w-[400px] lg:w-[500px]">
              <img src={github} className="h-6 w-6" />
              <span>Sign in with Github</span>
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border px-10 py-4 duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-[300px] md:w-[400px] lg:w-[500px]">
              <img src={bitbucket} className="h-6 w-6" />
              <span>Sign in with BitBucket</span>
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border px-10 py-4 duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-[300px] md:w-[400px] lg:w-[500px]">
              <img src={azure} className="h-6 w-6" />
              <span>Sign in with Azure Devops</span>
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border px-10 py-4 duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-[300px] md:w-[400px] lg:w-[500px]">
              <img src={gitlab} className="h-6 w-6" />
              <span>Sign in with GitLab</span>
            </button>
          </>
        ) : (
          <>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border px-10 py-4 duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-[300px] md:w-[400px] lg:w-[500px]">
              <img src={gitlab} className="h-6 w-6" />
              <span>Self Hosted GitLab</span>
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border px-10 py-4 duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-[300px] md:w-[400px] lg:w-[500px]">
              <img src={sso} className="h-6 w-6" />
              <span>Sign in with SSO</span>
            </button>
          </>
        )}
      </div>

      {/* <div className="flex flex-wrap gap-4">
        {mode === 'SAAS' ? (
          <div className="flex flex-col gap-4">
            <button className="flex h-16 w-[500px] items-center justify-center gap-2 rounded-lg border px-10 transition-all duration-300 hover:bg-gray-50">
              <img src={github} className="h-6 w-6" />
              <span>Sign in with Github</span>
            </button>
            <button className="flex h-16 w-[500px] items-center justify-center gap-2 rounded-lg border px-10 transition-all duration-300 hover:bg-gray-50">
              <img src={bitbucket} className="h-6 w-6" />
              <span>Sign in with BitBucket</span>
            </button>
            <button className="flex h-16 w-[500px] items-center justify-center gap-2 rounded-lg border px-10 transition-all duration-300 hover:bg-gray-50">
              <img src={azure} className="h-6 w-6" />
              <span>Sign in with Azure Devops</span>
            </button>
            <button className="flex h-16 w-[500px] items-center justify-center gap-2 rounded-lg border px-10 transition-all duration-300 hover:bg-gray-50">
              <img src={gitlab} className="h-6 w-6" />
              <span>Sign in with GitLab</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <button className="flex h-16 w-[500px] items-center justify-center gap-2 rounded-lg border px-10 transition-all duration-300 hover:bg-gray-50">
              <img src={gitlab} className="h-6 w-6" />
              <span>Self Hosted GitLab</span>
            </button>
            <button className="flex h-16 w-[500px] items-center justify-center gap-2 rounded-lg border px-10 transition-all duration-300 hover:bg-gray-50">
              <img src={sso} className="h-6 w-6" />
              <span>Sign in with SSO</span>
            </button>
          </div>
        )}
      </div> */}
    </div>
  );
}
