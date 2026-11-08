package com.vishnupriyahospital.korutla.model

data class Doctor(
    val id: String,
    val name: String,
    val nameTe: String,
    val designation: String,
    val designationTe: String,
    val qualification: String,
    val department: String,
    val departmentTe: String,
    val experienceYears: Int,
    val opTimings: String,
    val opTimingsTe: String,
    val consultationInfo: String,
    val rating: Double,
    val specializations: List<String>
)

data class Department(
    val id: String,
    val name: String,
    val nameTe: String,
    val description: String,
    val descriptionTe: String,
    val iconKey: String,
    val facilities: List<String>,
    val headDoctor: String
)

data class Testimonial(
    val patientName: String,
    val location: String,
    val comment: String,
    val treatment: String,
    val stars: Int
)
