import Input from "./ui/Input/Input";
import Button from "./ui/Button/Button";
import SideNav from "./layout/Nav/Side/SideNav";
import SideNavItem from "./layout/Nav/Side/SideNavItem";
import PieChart from "./charts/Dashboard/PieChart";
import Toast from "./ui/Toast/toast";
import ToastButton from "./ui/Toast/toastButton";
import ToasterWrap from "./ui/Toast/toastWrap";
import Modal from "./ui/Modal/modal";
import Checker from "./ui/Check/checker";
import Header from "./layout/Nav/Header/Header";
import Avatar from "./ui/Avatar/avatar";
import DashboardCard from "./charts/Dashboard/DashboardCard";
import LineChart from "./charts/Dashboard/LineChart";
import CardTitle from "./charts/Dashboard/CardTitle";
import SalesNav from "./layout/Nav/SalesNav/salesNav";
import TextArea from "./ui/Input/Textarea";
import InputArray from "./forms/NewInvoiceComponents/InputArray";
import Select from "./ui/Input/Select";
import Document from "./forms/NewInvoiceComponents/Document";
import Download from "./forms/NewInvoiceComponents/DownloadPDF";
import EditableCalendarInput from "./forms/NewInvoiceComponents/EditableCalendarInput";
import EditableFileImage from "./forms/NewInvoiceComponents/EditableFileImage";
import EditableInput from "./forms/NewInvoiceComponents/EditableInput";
import EditableSelect from "./forms/NewInvoiceComponents/EditableSelect";
import EditableTextarea from "./forms/NewInvoiceComponents/EditableTextarea";
import InvoicePageCom from "./forms/NewInvoiceComponents/CreateInvoice";
import CreateQuotes from "./forms/Quote/CreateQuotes";
import CreateReceipt from "./forms/Receipt/CreateReceipt";
import View from "./forms/NewInvoiceComponents/View";
import Text from "./forms/NewInvoiceComponents/Text";
import Page from "./forms/NewInvoiceComponents/Page";
import ImageUpload from "./ui/Input/imageUpload";
import CreateWayBill from "./forms/WayBill/CreateWayBill";
import InvoicePDF from "./forms/NewInvoiceComponents/PDFs/invoicePDF";

/* =========================
   * Navigation
   ========================= */
   
   /* =========================
      * Invoice
      ========================= */
   import InvoiceMain from "./invoice/InvoiceMain";
   import InvoiceForm from "./invoice/InvoiceForm";
   import InvoiceActions from "./invoice/InvoiceActions";
   
   /* =========================
      * Invoice components
      ========================= */
   // * Form
   // Form components
   import SingleItem from "./invoice/form/SingleItem";
   import Charges from "./invoice/form/Charges";
   import TemplateSelector from "./invoice/form/TemplateSelector";
   
   // Form / Wizard
   import WizardNavigation from "./invoice/form/wizard/WizardNavigation";
   import WizardStep from "./invoice/form/wizard/WizardStep";
   import WizardProgress from "./invoice/form/wizard/WizardProgress";
   
   // Form / Sections
   import BillFromSection from "./invoice/form/sections/BillFromSection";
   import BillToSection from "./invoice/form/sections/BillToSection";
   import InvoiceDetails from "./invoice/form/sections/InvoiceDetails";
   import Items from "./invoice/form/sections/Items";
   import PaymentInformation from "./invoice/form/sections/PaymentInformation";
   import InvoiceSummary from "./invoice/form/sections/InvoiceSummary";
   
   // * Actions
   import PdfViewer from "./invoice/actions/PdfViewer";
   import LivePreview from "./invoice/actions/LivePreview";
   import FinalPdf from "./invoice/actions/FinalPdf";
   
   // * Reusable components
   // Form fields
   import CurrencySelector from "./reusables/form-fields/CurrencySelector";
   import FormInput from "./reusables/form-fields/FormInput";
   import FormTextarea from "./reusables/form-fields/FormTextarea";
   import DatePickerFormField from "./reusables/form-fields/DatePickerFormField";
   import FormFile from "./reusables/form-fields/FormFile";
   import ChargeInput from "./reusables/form-fields/ChargeInput";
   import FormCustomInput from "./reusables/form-fields/FormCustomInput";
   import { SelectDemo } from "./reusables/form-fields/Select";
   
   import BaseButton from "./reusables/BaseButton";
   import ThemeSwitcher from "./reusables/ThemeSwitcher";
   import LanguageSelector from "./reusables/LanguageSelector";
   import Subheading from "./reusables/Subheading";
   
   /* =========================
      * Modals & Alerts
      ========================= */
   import SendPdfToEmailModal from "./modals/email/SendPdfToEmailModal";
   
   // Import/Export
   import InvoiceLoaderModal from "./modals/invoice/InvoiceLoaderModal";
   import InvoiceExportModal from "./modals/invoice/InvoiceExportModal";

   //InvoiceModal
   import MainInvoiceModal from "./modals/invoice/MainInvoiceModal";
   
   // Custom Selectors
   import SavedInvoicesList from "./modals/invoice/components/SavedInvoicesList";
   
   // Signature
   import SignatureModal from "./modals/signature/SignatureModal";
   
   // Signature / Tabs
   import DrawSignature from "./modals/signature/tabs/DrawSignature";
   import TypeSignature from "./modals/signature/tabs/TypeSignature";
   import UploadSignature from "./modals/signature/tabs/UploadSignature";
   
   // Signature / Components
   import SignatureColorSelector from "./modals/signature/components/SignatureColorSelector";
   import SignatureFontSelector from "./modals/signature/components/SignatureFontSelector";
   
   // Alerts
   import NewInvoiceAlert from "./modals/alerts/NewInvoiceAlert";
   
   /* =========================
      * Templates
      ========================= */
   // Invoice templates
   import DynamicInvoiceTemplate from "./templates/invoice-pdf/DynamicInvoiceTemplate";
   import InvoiceLayout from "./templates/invoice-pdf/InvoiceLayout";
   import InvoiceTemplate1 from "./templates/invoice-pdf/InvoiceTemplate1";
   import InvoiceTemplate2 from "./templates/invoice-pdf/InvoiceTemplate2";
   
   // Email templates
   import SendPdfEmail from "./templates/email/SendPdfEmail";
   
   /* =========================
      ? DEV ONLY
      ========================= */
   import DevDebug from "./dev/DevDebug";
   

export {
    Input, Button, SideNav, SideNavItem, PieChart, EditableInput, EditableSelect, InvoicePageCom,
    Toast, ToastButton, ToasterWrap, Modal, Checker, EditableTextarea, Text, View, Page, CreateReceipt,
    Header, Avatar, DashboardCard, LineChart, CardTitle, EditableFileImage, CreateQuotes, ImageUpload,
    SalesNav, TextArea, Select, Document, Download, EditableCalendarInput, CreateWayBill,
    InvoicePDF, InputArray,
    InvoiceMain,
    InvoiceForm,
    InvoiceActions,
    BillFromSection,
    BillToSection,
    InvoiceDetails,
    Items,
    SingleItem,
    Charges,
    TemplateSelector,
    WizardNavigation,
    WizardStep,
    WizardProgress,
    PaymentInformation,
    InvoiceSummary,
    CurrencySelector,
    SavedInvoicesList,
    PdfViewer,
    LivePreview,
    FinalPdf,
    FormInput,
    FormTextarea,
    DatePickerFormField,
    FormFile,
    ChargeInput,
    FormCustomInput,
    BaseButton,
    ThemeSwitcher,
    LanguageSelector,
    Subheading,
    SendPdfToEmailModal,
    InvoiceLoaderModal,
    InvoiceExportModal,
    SignatureModal,
    DrawSignature,
    TypeSignature,
    UploadSignature,
    SignatureColorSelector,
    SignatureFontSelector,
    NewInvoiceAlert,
    DynamicInvoiceTemplate,
    InvoiceLayout,
    InvoiceTemplate1,
    InvoiceTemplate2,
    SendPdfEmail,
    DevDebug, 
    MainInvoiceModal,
    SelectDemo
}