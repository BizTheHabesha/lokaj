import { BiRun, BiMale } from "react-icons/bi";
import { BsQuestionLg } from "react-icons/bs";
import { SiSuperuser } from "react-icons/si";
import {
	MdOutlineSupervisorAccount,
	MdOutlineSupervisedUserCircle,
} from "react-icons/md";
/**
 * Generate a random UUID
 * @returns {string}
 */
export function uuid() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
		/[xy]/g,
		function (c) {
			var r = (Math.random() * 16) | 0,
				v = c == "x" ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		}
	);
}
/**
 * Splits a camelcase string into its componenets
 * @param {string} str
 * @returns {[string]}
 */
export function splitCamel(str) {
	typeof str === "string" ? str : str.toString();
	return str.split(/[A-Z]/);
}
/**
 * Converts a position name to its tag color and any other required data
 * @param {string} position The name of the position
 * @returns {{color: string, text: string, icon: import("react-icons/lib").IconType}}
 */
export function positionTagData(position) {
	const lower = typeof position === "string" ? position.toLowerCase() : null;
	switch (lower) {
		case "admin":
			return {
				color: "red",
				text: "Admin",
				icon: SiSuperuser,
			};
			break;

		case "runner":
			return {
				color: "blue",
				text: "Runner",
				icon: BiRun,
			};
			break;

		case "supervisor":
			return {
				color: "purple",
				text: "Supervisor",
				icon: MdOutlineSupervisorAccount,
			};
			break;

		case "manager":
		case "fmanager":
		case "afmanager":
			return {
				color: "green",
				text: "Manager",
				icon: MdOutlineSupervisedUserCircle,
			};
			break;

		case "guest":
			return {
				color: "gray",
				text: "Guest",
				icon: BiMale,
			};
			break;

		default:
			return {
				color: "gray",
				text: "Unknown",
				icon: BsQuestionLg,
			};
			break;
	}
}
export function getTicketTagData(entry) {
	const lower = entry.toLowerCase();
}

/**
 *
 * @param {string} position a string representing the position of the user
 * @returns {{self: {hasProfile: boolean, canView: boolean, canEdit: boolean, canDelete: boolean}, users: {canPromote?: boolean, canView: boolean, canEdit: boolean, canDelete: boolean}, tickets: {canView: boolean, canEdit: boolean, editLvl?: number, canDelete: boolean}, payroll: {canView: boolean, canEdit: boolean, canDelete: boolean}, server: {canView: boolean, canEdit: boolean, canDelete: boolean}}}
 */
export function getPositionPermissions(position) {
	const lower = typeof position === "string" ? position.toLowerCase() : null;
	switch (lower) {
		case "admin":
			return {
				self: {
					hasProfile: false,
					canView: false,
					canEdit: false,
					canDelete: false,
				},
				users: {
					canPromote: true,
					canView: true,
					canEdit: true,
					canDelete: true,
				},
				tickets: {
					canView: true,
					canEdit: true,
					editLvl: 3,
					canDelete: true,
				},
				payroll: {
					canView: true,
					canEdit: true,
					canDelete: true,
				},
				server: {
					canView: true,
					canEdit: true,
					canDelete: true,
				},
			};
			break;

		case "manager":
		case "fmanager":
		case "afmanager":
			return {
				self: {
					hasProfile: true,
					canView: true,
					canEdit: true,
					canDelete: false,
				},
				users: {
					canPromote: true,
					canView: true,
					canEdit: true,
					canDelete: true,
				},
				tickets: {
					canView: true,
					canEdit: true,
					canDelete: false,
				},
				payroll: {
					canView: true,
					canEdit: true,
					canDelete: false,
				},
				server: {
					canView: true,
					canEdit: true,
					canDelete: false,
				},
			};
			break;
			break;

		case "supervisor":
			return {
				self: {
					hasProfile: true,
					canView: true,
					canEdit: false,
					canDelete: false,
				},
				users: {
					canView: true,
					canEdit: true,
					canDelete: false,
				},
				tickets: {
					canView: true,
					canEdit: true,
					canDelete: false,
				},
				payroll: {
					canView: true,
					canEdit: false,
					canDelete: false,
				},
				server: {
					canView: false,
					canEdit: false,
					canDelete: false,
				},
			};
			break;

		case "runner":
			return {
				self: {
					hasProfile: true,
					canView: true,
					canEdit: false,
					canDelete: false,
				},
				users: {
					canView: false,
					canEdit: false,
					canDelete: false,
				},
				tickets: {
					canView: true,
					canEdit: true,
					canDelete: false,
				},
				payroll: {
					canView: true,
					canEdit: false,
					canDelete: false,
				},
				server: {
					canView: false,
					canEdit: false,
					canDelete: false,
				},
			};
			break;

		default:
			return {
				self: {
					hasProfile: false,
					canView: false,
					canEdit: false,
					canDelete: false,
				},
				users: {
					canView: false,
					canEdit: false,
					canDelete: false,
				},
				tickets: {
					canView: false,
					canEdit: false,
					canDelete: false,
				},
				payroll: {
					canView: false,
					canEdit: false,
					canDelete: false,
				},
				server: {
					canView: false,
					canEdit: false,
					canDelete: false,
				},
			};
			break;
	}
}
