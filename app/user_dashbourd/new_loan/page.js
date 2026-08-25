'use client';
import React, { useState } from 'react';
import { 
  HiCreditCard, HiUpload, HiOfficeBuilding, 
  HiCash, HiArrowRight, HiArrowLeft, HiDocumentText, 
  HiLockClosed, HiCheckCircle, HiX 
} from 'react-icons/hi';

export default function RequestLoan() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  
  // State ya kufungua/kufunga Stripe Payment Modal
  const [isStripeModalOpen, setIsStripeModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    loanAmount: '',
    repaymentPeriod: '',
    reason: '',
    idDocument: null,
    guarantorName: '',
    guarantorRelationship: '',
    guarantorPhone: '',
    guarantorEmail: '',
    guarantorNid: '',
    guarantorAddress: '',
    bankName: '',
    accountNumber: '',
    branch: '',
    swiftCode: '',
    accountHolderName: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  // Mantiki ya kukokotoa riba ya 30% kiotomatiki
  const principal = parseFloat(formData.loanAmount) || 0;
  const interestRatePercentage = 30; // 30% Riba
  const interestAmount = (principal * interestRatePercentage) / 100;
  const totalPayable = principal + interestAmount;

  // Handle Step Navigation
  const nextStep = (e) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  // Inafungua Modal ya malipo baada ya kukubali terms
  const handleOpenPaymentModal = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please read and agree to the Terms & Conditions before proceeding.");
      return;
    }
    setIsStripeModalOpen(true);
  };

  // Kazi ya mwisho baada ya kulipa kwenye Modal
  const handleStripeCheckoutConfirm = () => {
    setLoading(true);
    setIsStripeModalOpen(false);
    setTimeout(() => {
      setLoading(false);
      alert("Payment successful! Loan application and bank details submitted successfully.");
      // Hapa unaweza kuongeza code za kuelekeza user kwenye dashboard
    }, 2000);
  };

  return (
    <div className="bg-[#121212] border border-zinc-800 p-6 md:p-8 rounded-2xl shadow-xl max-w-4xl mx-auto text-white relative">
      
      {/* HEADER TITLE */}
      <div className="mb-6 border-b border-zinc-800 pb-4">
        <h2 className="text-xl font-bold tracking-wide flex items-center text-amber-400">
          <HiCreditCard className="w-6 h-6 mr-2" /> Request New Loan & Disbursement Setup
        </h2>
        <p className="text-xs text-zinc-400 mt-1">Complete all steps sequentially to process your application securely.</p>
      </div>

      {/* STEP TABS HEADER */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8 overflow-x-auto pb-2">
        <div className={`p-3 rounded-xl border flex flex-col justify-center transition-all ${
          step === 1 ? 'border-amber-500 bg-amber-500/10 text-amber-400' : 'border-zinc-800 bg-zinc-900/50 text-zinc-400'
        }`}>
          <div className="flex items-center space-x-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              step === 1 ? 'bg-amber-500 text-zinc-950' : 'bg-zinc-800 text-zinc-300'
            }`}>1</span>
            <span className="text-xs font-bold uppercase tracking-wider">Loan Details</span>
          </div>
          <span className="text-[10px] text-zinc-500 mt-1 ml-8">Amount & purpose</span>
        </div>

        <div className={`p-3 rounded-xl border flex flex-col justify-center transition-all ${
          step === 2 ? 'border-amber-500 bg-amber-500/10 text-amber-400' : 'border-zinc-800 bg-zinc-900/50 text-zinc-400'
        }`}>
          <div className="flex items-center space-x-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              step === 2 ? 'bg-amber-500 text-zinc-950' : 'bg-zinc-800 text-zinc-300'
            }`}>2</span>
            <span className="text-xs font-bold uppercase tracking-wider">Guarantor</span>
          </div>
          <span className="text-[10px] text-zinc-500 mt-1 ml-8">Reference info</span>
        </div>

        <div className={`p-3 rounded-xl border flex flex-col justify-center transition-all ${
          step === 3 ? 'border-amber-500 bg-amber-500/10 text-amber-400' : 'border-zinc-800 bg-zinc-900/50 text-zinc-400'
        }`}>
          <div className="flex items-center space-x-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              step === 3 ? 'bg-amber-500 text-zinc-950' : 'bg-zinc-800 text-zinc-300'
            }`}>3</span>
            <span className="text-xs font-bold uppercase tracking-wider">Bank Info</span>
          </div>
          <span className="text-[10px] text-zinc-500 mt-1 ml-8">Disbursement account</span>
        </div>

        <div className={`p-3 rounded-xl border flex flex-col justify-center transition-all ${
          step === 4 ? 'border-amber-500 bg-amber-500/10 text-amber-400' : 'border-zinc-800 bg-zinc-900/50 text-zinc-400'
        }`}>
          <div className="flex items-center space-x-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              step === 4 ? 'bg-amber-500 text-zinc-950' : 'bg-zinc-800 text-zinc-300'
            }`}>4</span>
            <span className="text-xs font-bold uppercase tracking-wider">Attachments</span>
          </div>
          <span className="text-[10px] text-zinc-500 mt-1 ml-8">Government ID</span>
        </div>

        <div className={`col-span-2 sm:col-span-1 p-3 rounded-xl border flex flex-col justify-center transition-all ${
          step === 5 ? 'border-amber-500 bg-amber-500/10 text-amber-400' : 'border-zinc-800 bg-zinc-900/50 text-zinc-400'
        }`}>
          <div className="flex items-center space-x-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              step === 5 ? 'bg-amber-500 text-zinc-950' : 'bg-zinc-800 text-zinc-300'
            }`}>5</span>
            <span className="text-xs font-bold uppercase tracking-wider">Agree & Pay</span>
          </div>
          <span className="text-[10px] text-zinc-500 mt-1 ml-8">Terms & fee</span>
        </div>
      </div>

      {/* FORM CONTENT ACCORDING TO CURRENT STEP */}
      {step === 1 && (
        <form onSubmit={nextStep} className="space-y-6">
          <div className="border border-zinc-800 p-6 rounded-2xl bg-zinc-900/30 space-y-6">
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider border-b border-zinc-800 pb-3">
              1. Loan Specifications & Purpose
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">Loan Amount (TZS) *</label>
                <input 
                  type="number" 
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  placeholder="e.g. 500000" 
                  required 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">Repayment Period *</label>
                <select 
                  name="repaymentPeriod"
                  value={formData.repaymentPeriod}
                  onChange={handleChange}
                  required 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-zinc-300"
                >
                  <option value="">Select Period</option>
                  <option value="1 Month">1 Month</option>
                  <option value="3 Months">3 Months</option>
                  <option value="6 Months">6 Months</option>
                  <option value="12 Months">12 Months</option>
                </select>
              </div>
            </div>

            {principal > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl">
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Principal Amount</p>
                  <p className="text-sm font-bold text-white">TZS {principal.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Interest (30%)</p>
                  <p className="text-sm font-bold text-amber-400">TZS {interestAmount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Total Payable</p>
                  <p className="text-sm font-bold text-emerald-400">TZS {totalPayable.toLocaleString()}</p>
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">Reason for Loan *</label>
              <textarea 
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows="4" 
                placeholder="Briefly explain what the loan will be used for..." 
                required 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-white"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3 rounded-xl text-xs flex items-center space-x-2 cursor-pointer transition"
            >
              <span>Next: Guarantor Info</span>
              <HiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={nextStep} className="space-y-6">
          <div className="border border-zinc-800 p-6 rounded-2xl bg-zinc-900/30 space-y-6">
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider border-b border-zinc-800 pb-3">
              2. Guarantor Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1">Guarantor Full Name *</label>
                <input type="text" name="guarantorName" value={formData.guarantorName} onChange={handleChange} placeholder="Full Name" required className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-amber-500 text-white" />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1">Relationship *</label>
                <input type="text" name="guarantorRelationship" value={formData.guarantorRelationship} onChange={handleChange} placeholder="e.g. Brother / Colleague" required className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-amber-500 text-white" />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1">Phone Number *</label>
                <input type="tel" name="guarantorPhone" value={formData.guarantorPhone} onChange={handleChange} placeholder="+255..." required className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-amber-500 text-white" />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1">Email Address *</label>
                <input type="email" name="guarantorEmail" value={formData.guarantorEmail} onChange={handleChange} placeholder="name@example.com" required className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-amber-500 text-white" />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1">National ID Number *</label>
                <input type="text" name="guarantorNid" value={formData.guarantorNid} onChange={handleChange} placeholder="1234567890" required className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-amber-500 text-white" />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1">Physical Home Address *</label>
                <input type="text" name="guarantorAddress" value={formData.guarantorAddress} onChange={handleChange} placeholder="123 Street, City" required className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-amber-500 text-white" />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={prevStep} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold px-5 py-3 rounded-xl text-xs flex items-center space-x-2 cursor-pointer">
              <HiArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button type="submit" className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3 rounded-xl text-xs flex items-center space-x-2 cursor-pointer">
              <span>Next: Bank Info</span>
              <HiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={nextStep} className="space-y-6">
          <div className="border border-zinc-800 p-6 rounded-2xl bg-zinc-900/30 space-y-6">
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider border-b border-zinc-800 pb-3 flex items-center">
              <HiOfficeBuilding className="w-4 h-4 mr-2 text-amber-400" /> 3. Bank Information (For Disbursement)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">Bank Name *</label>
                <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} placeholder="e.g. CRDB Bank / NMB" required className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">Account Number *</label>
                <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} placeholder="e.g. 25410016705" required className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">Branch *</label>
                <input type="text" name="branch" value={formData.branch} onChange={handleChange} placeholder="e.g. Dunga Branch" required className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">Swift Code *</label>
                <input type="text" name="swiftCode" value={formData.swiftCode} onChange={handleChange} placeholder="e.g. CORRTZTZ" required className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-white" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">Account Holder Name *</label>
                <input type="text" name="accountHolderName" value={formData.accountHolderName} onChange={handleChange} placeholder="Name as it appears on bank account" required className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-white" />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={prevStep} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold px-5 py-3 rounded-xl text-xs flex items-center space-x-2 cursor-pointer">
              <HiArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button type="submit" className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3 rounded-xl text-xs flex items-center space-x-2 cursor-pointer">
              <span>Next: Attachments</span>
              <HiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      {step === 4 && (
        <form onSubmit={nextStep} className="space-y-6">
          <div className="border border-zinc-800 p-6 rounded-2xl bg-zinc-900/30 space-y-6">
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider border-b border-zinc-800 pb-3 flex items-center">
              <HiDocumentText className="w-4 h-4 mr-2 text-amber-400" /> 4. Required Attachments
            </h3>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1">
                Upload National ID / NIDA, Voter ID, or Passport *
              </label>
              <p className="text-[11px] text-zinc-500 mb-3">
                Tafadhali pakia kitambulisho halali cha serikali (NIDA, Kitambulisho cha Kura, Leseni ya Udereva, au Hati ya Kusafiria).
              </p>
              
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-zinc-800 border-dashed rounded-xl cursor-pointer bg-zinc-900 hover:bg-zinc-800/50 transition">
                  <div className="flex flex-col items-center justify-center pt-4 pb-5 px-4 text-center">
                    <HiUpload className="w-8 h-8 mb-2 text-amber-400" />
                    <p className="text-xs text-zinc-300"><span className="font-semibold">Click to upload ID document</span> or drag and drop</p>
                    <p className="text-[10px] text-zinc-500 mt-1">PNG, JPG or PDF (MAX. 5MB)</p>
                  </div>
                  <input type="file" name="idDocument" onChange={handleChange} className="hidden" required />
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={prevStep} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold px-5 py-3 rounded-xl text-xs flex items-center space-x-2 cursor-pointer">
              <HiArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button type="submit" className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3 rounded-xl text-xs flex items-center space-x-2 cursor-pointer">
              <span>Next: Agree & Pay</span>
              <HiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      {step === 5 && (
        <form onSubmit={handleOpenPaymentModal} className="space-y-6">
          <div className="border border-zinc-800 p-6 rounded-2xl bg-zinc-900/30 space-y-6">
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider border-b border-zinc-800 pb-3 flex items-center">
              <HiCash className="w-4 h-4 mr-2 text-amber-400" /> 5. Terms & Conditions & Payment
            </h3>

            {/* Terms Box */}
            <div className="bg-[#18181b] border border-zinc-800 p-4 rounded-xl text-zinc-400 text-xs space-y-3 max-h-48 overflow-y-auto pr-2">
              <p>1. <strong>Disbursement Accuracy:</strong> The bank details provided must match the applicant's official legal identity. MicroPrestige will not be held liable for misrouted funds due to incorrect bank numbers.</p>
              <p>2. <strong>Non-Refundable Processing Fee:</strong> A processing fee of TSH 10,000 is required via Stripe to initiate the verification process and is strictly non-refundable.</p>
              <p>3. <strong>Guarantor Liability:</strong> The designated guarantor will be contacted and must acknowledge their legal responsibility.</p>
              <p>4. <strong>Repayment & Penalties:</strong> Failure to repay the loan within the stipulated duration will incur a 5% daily penalty on the outstanding principal.</p>
            </div>

            {/* Checkbox Agreement */}
            <div className="flex items-center space-x-3 pt-2">
              <input 
                type="checkbox" 
                id="terms" 
                checked={agreed} 
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 rounded bg-zinc-900 border-zinc-800 text-emerald-500 focus:ring-0 cursor-pointer" 
              />
              <label htmlFor="terms" className="text-xs text-zinc-300 cursor-pointer">
                I agree to the terms and conditions outlined above. *
              </label>
            </div>

            {/* Bottom Grid: Fee Info & Pay Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-zinc-800/80 gap-4">
              <div>
                <p className="text-[11px] text-zinc-400 uppercase tracking-wider">Processing Fee</p>
                <p className="text-lg font-bold text-white">TSH 10,000</p>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 text-sm cursor-pointer"
              >
                {loading ? (
                  <span className="flex items-center space-x-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </span>
                ) : (
                  <>
                    <HiCreditCard className="w-5 h-5" />
                    <span>Pay Processing Fee & Submit</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-start">
            <button type="button" onClick={() => prevStep()} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold px-5 py-3 rounded-xl text-xs flex items-center space-x-2 cursor-pointer">
              <HiArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          </div>
        </form>
      )}

      {/* STRIPE PAYMENT MODAL */}
      {isStripeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-[#121212] border border-zinc-800 rounded-3xl max-w-md w-full p-6 text-zinc-300 shadow-2xl relative space-y-6">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsStripeModalOpen(false)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 p-2 rounded-full transition cursor-pointer"
            >
              <HiX className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <HiCreditCard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Stripe Secure Checkout</h3>
                <p className="text-xs text-zinc-500">Non-refundable loan processing fee</p>
              </div>
            </div>

            {/* Payment Details Box */}
            <div className="bg-zinc-900/80 border border-zinc-800/80 rounded-2xl p-4 space-y-3 text-xs">
              <div className="flex justify-between items-center text-zinc-400">
                <span>Transaction Type:</span>
                <span className="text-white font-medium">Loan Verification Fee</span>
              </div>
              <div className="flex justify-between items-center text-zinc-400">
                <span>Payment Gateway:</span>
                <span className="text-indigo-400 font-bold flex items-center gap-1">
                  Stripe <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                </span>
              </div>
              <div className="border-t border-zinc-800 pt-3 flex justify-between items-center text-sm font-bold text-white">
                <span>Total Amount:</span>
                <span className="text-amber-400">TSH 10,000</span>
              </div>
            </div>

            {/* Security Trust Badge */}
            <div className="flex items-center space-x-2 text-[11px] text-zinc-500 bg-emerald-500/5 border border-emerald-500/10 p-3 rounded-xl">
              <HiLockClosed className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>256-bit SSL Encrypted. Your payment info is securely processed by Stripe.</span>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-2">
              <button 
                onClick={() => setIsStripeModalOpen(false)}
                className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold py-3 px-4 rounded-xl border border-zinc-800 transition text-xs cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={handleStripeCheckoutConfirm}
                className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-zinc-950 font-bold py-3 px-4 rounded-xl transition shadow-lg text-xs flex items-center justify-center space-x-2 cursor-pointer"
              >
                <HiCheckCircle className="w-4 h-4" />
                <span>Pay Now (TSH 10,000)</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}